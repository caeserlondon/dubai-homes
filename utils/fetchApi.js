import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//   'X-RapidAPI-Key': '79e781e850msha37d0c7ef349fadp1996cajsn07158782356d'
// }

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {},
	});
	return data;
};
