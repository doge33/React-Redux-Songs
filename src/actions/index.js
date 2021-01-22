//Action Creators

//this export syntax means exporting a "named export"; import it else where by { ... }
export const selectSong = (song) => {

  //action creator needs to return a plain js object!
  return {
    type: 'SONG_SELECTED', //type is a required property in the object
    payload: song         //payload is an optional property
  };
};

