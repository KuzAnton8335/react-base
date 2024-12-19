import axios from "axios";
import { WeatheResponse } from "../models/weathers";
export const weatherService = {
	async getWeather(cityName: string): Promise<WeatheResponse | undefined> {
		try {
			const { data } = await axios.get(
				"https://api.openweathermap.org/data/2.5/weather",
				{
					params: {
						appid: "e7e2c704c847621dbbd3eb4f91de2035",
						q: cityName,
						lang: "ru",
						units: "metric",
					},
				}
			);
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.message || error.message);
			}
		}
	},
};
