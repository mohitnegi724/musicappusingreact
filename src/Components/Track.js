import React, { Component } from 'react';
import '../Style/Tracks.css';

class Track extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };
  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);
    if (!previewUrl) {
      alert('Preview Not Available');
    }
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  }
  render(){
    const {Tracks} = this.props;
    return (
      <div className="trackParent">
        {Tracks.map(track => {
          console.log(track.track_number);
          const {name, id,preview_url}= track;
            return <div id="tracksBody" key={id} onClick={this.playAudio(preview_url)}>
                <img src={track.album.images[0].url} alt={track.album.name} id="trackImage"/>
                <div className="trackDetails">
                  <h3 id="trackName">Song | {name}</h3>
                  <p id="trackAlbum">Album | {track.album.name}</p>
                  <p id="trackReleaseDate">Release Date | {parseInt(track.album.release_date)}</p>
                </div>
            </div>
          })
        }
      </div>
    )
  }
}

export default Track;