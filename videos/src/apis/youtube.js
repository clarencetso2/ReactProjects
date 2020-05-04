import axios from 'axios';
const KEY = 'AIzaSyCZ0_ZG90Gl_H0dZjjcu3W6wBpG6RHS5XY'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part: 'snippet',
		maxResults: '5',
		key: `${KEY}`
		
	}
});