import React from "react";
import { connect } from "react-redux";

// Everything here is now the props for the component
const mapStateToProps = (state, ownProps) => {
  return {
    song: state.selectedSong
  };
};

function SongDetails({ song }) {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details </h3>
      <p>
        Title: {song.title}
        <br />
        Duraton: {song.duration}
      </p>
    </div>
  );
}

export default connect(mapStateToProps)(SongDetails);
