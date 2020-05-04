import React from  'react';
import {connect} from 'react-redux';

const SongDetail = ({song=""}) => {
	//console.log(props);
	if(!song){
		return <div>Select a song</div>;
	}
	
	console.log(song.title);
	return(
		<div>
			<h3> Details for:</h3>
			<p>
				Title: {song.title} 
				<br />
				Duration: {song.duration}
			</p> 
		</div>
	) 
}

const mapStateToProps = (state) =>{
	return {song: state.selectedSongs}
};

export default connect(mapStateToProps)(SongDetail);