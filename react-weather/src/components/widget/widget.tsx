import { ChangeEventHandler, FormEvent, useState } from "react";
// библиотека для загрузки спиннера для загрузки
import { CircleLoader } from "react-spinners";
import { Weather } from "../../models/weather";
import { weatherService } from "../../services/weather.service";
import { Info } from "../info";
import { TextField } from "../TextField";
import "./widget.scss";

export const Widget: React.FC = () => {
	//хук для поиска города
	const [search, setSearch] = useState("");
	// хук для получения данных о погоде по заданному городу
	const [weather, setWeather] = useState<Weather | null>(null);
	// функция запроса информации поиска по городам
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearch(e.target.value);
	};
	// хук для отображения загрузки при обработки запроса на сервер
	const [loading, setLoading] = useState(false);
	// хук для выявления ошибки при неправильном вводе города
	const [error, setError] = useState("");

	// функция запроса информации об погоде по API
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!search) {
			setWeather(null);
			return;
		}
		setLoading(true);

		try {
			const weather = await weatherService.getWeather(search);
			if (weather) {
				setWeather(weather);
				setLoading(false);
				setError(null);
			}
		} catch (error) {
			setWeather(null);
			setError(error?.message as string);
		} finally {
			setLoading(false);
		}
	};

	return (
		// компонент для отображения информации об погоде по заданному городу
		<>
			<div className="widget">
				<form className="widget-form" onSubmit={handleSubmit}>
					<TextField
						name="search"
						placeholder="Введите название города"
						value={search}
						errorMessages={error}
						onChange={handleChange}
					/>
					{loading ? (
						// иконка загрузки из библиотеки react-spinners
						<CircleLoader
							className="loader"
							size={100}
							color="rgba(148,233,201,1)"
						/>
					) : (
						weather && (
							<>
								<h2 className="widget-title">{weather.name}</h2>
								<img
									src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
									alt="иконка осадков"
									className="widget-image"
								/>
								<Info
									humidity={weather.main.humidity}
									feels={weather.main.feels_like}
									temp={weather.main.temp}
								/>
								<p className="widget-description">
									{weather.weather[0].description}
								</p>
							</>
						)
					)}
					<button
						className="widget-submit"
						aria-label="кнопка запроса информации"
						disabled={!search}
					>
						Отправить
					</button>
				</form>
			</div>
		</>
	);
};
