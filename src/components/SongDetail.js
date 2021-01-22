import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

  //console.log(props); //should be the currently selected song
  if (!song) {
    return 'Select A Song';
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
      
    </div>
  )
}

const mapStateToProps = (state) => {

  return {song: state.selectedSong}

}

export default connect(mapStateToProps)(SongDetail);
