import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "song1", duration: "4.05" },
    { title: "song2", duration: "4.05" },
    { title: "song3", duration: "4.05" },
    { title: "song4", duration: "4.05" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    //     Returns the song
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
