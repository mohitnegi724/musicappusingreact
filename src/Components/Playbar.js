import React, { Component } from 'react';
import "../Style/Playbar.css";

class Playbar extends Component {
  render() {
    const {currentlyPlaying} = this.props;
    return (
      <div>
        <div className="barBody">
          <h4>{currentlyPlaying}</h4>
        </div>
      </div>
    )
  }
}

export default Playbar;