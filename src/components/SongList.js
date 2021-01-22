import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  //this.props ==> {songs: state.songs, dispatch: f } (you also get the dispatch() function from store)

  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      )
    })
  }


  render() {

    //console.log(this.props)
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}
// configures the connect component; function name doesn't matter
// "state" is all of the state in the redux store
//**** this function will be re-run every time the state in the store changes
const mapStateToProps = (state) => {
  //console.log('state is updated: ', state)
  return { songs: state.songs }; 
  //this function gets a specific piece of state from store(through Connect)(and in the end give it to the SongList component as a prop)

}

//connect() actually returns a function. Then pass in argument(songList) to return from that intermediate function
export default connect(mapStateToProps, { selectSong: selectSong })(SongList); 
//the second argument {selectSong: selectSong} is the action
