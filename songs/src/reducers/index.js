import { combineReducers } from "redux";

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

export const songsReducer = () => {
  return [
    { title: "song1", duration: "4.05" },
    { title: "song1", duration: "4.05" },
    { title: "song1", duration: "4.05" },
    { title: "song1", duration: "4.05" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
