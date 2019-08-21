import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
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
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Take state object from redux store, and make it show as props to components
// it just gets the state
const mapStateToProps = state => {
  return {
    // if i do this.props = songs
    songs: state.songs
  };
};

// NOTE: you config connect by passing it state using mapStateToProps
/* 
- Why are we passing select song to connect instead of directly calling it in the component?
- Because: REDUX IS NOT MAGIC, calling selectSong => {useless object} which won't actually do what we told the reducer to do. 
- Calling it through connect, allows it to connect to the reducer and perform described action on state 
- For an action to actually work it needs to go through dispatch, which happens when sent through connect
- Connect: automatically takes action and sends it to dispatch
*/
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

/* You will always have to do this */
// import connect
// create component
// mapStateToProps
// export connect(mapState)(component)
