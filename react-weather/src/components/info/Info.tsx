import "../widget/widget.scss";
interface InfoProps {
	feels: number;
	temp: number;
	humidity: number;
}

export const Info: React.FC<InfoProps> = ({ feels, temp, humidity }) => {
	return (
		<>
			<div className="widget-info">
				<div className="widget-info__feels">
					<span>Чувствуется как</span>
					<span>{feels} &deg;C</span>
				</div>
				<div className="widget-info__temp">
					<span>Температура</span>
					<span>{temp} &deg;C</span>
				</div>
				<div className="widget-info__hum">
					<span>Влажность</span>
					<span>{humidity} %</span>
				</div>
			</div>
		</>
	);
};
