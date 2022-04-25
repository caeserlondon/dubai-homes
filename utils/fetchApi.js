import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
			"X-RapidAPI-Key": "YOUR_API_KEY_HERE",
		},
	});
	return data;
};
