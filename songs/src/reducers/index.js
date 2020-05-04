import { combineReducers } from 'redux';

const songsReducer = () => {
	return[
		{title: 'Dont Like', duration:'4:05'},
		{title: 'Lova Sosa', duration:'3:05'},
		{title: 'Hate Being Sober', duration:'2:05'}
	];
};

const selectedSongReducer = (selectedSong=null, action) =>{
	if(action.type==='SONG_SELECTED'){
		return action.payload;
	}
	
	return selectedSong; 
};

export default combineReducers({
	songs: songsReducer,
	selectedSongs:selectedSongReducer
});