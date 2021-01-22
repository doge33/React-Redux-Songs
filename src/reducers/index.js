//Reducers!
import { combineReducers } from 'redux'; 

// this reducer gives you a static list of songs
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'I Want it That Way', duration: '1:45'}
  ];
};

// this reducer is to process the action of selecting a song ->
const selectedSongReducer = (selectedSong = null, action) => {

  if(action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

// the object keys will be the key properties in the state
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})