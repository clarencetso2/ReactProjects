import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers:{
		Authorization: 'Client-ID ZYlKGaaibXwV2u8DPCtLngd8XLRGBK7gZpikJj_qvwg'
	}
});
