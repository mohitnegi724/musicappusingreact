import React, { Component } from 'react';
import '.././Style/Artists.css';

class Artist extends Component {
  render() {
    const {name, image,followers, genres} = this.props;
    return (
      <div className="ArtistArea">
        <img src={image} alt={name} className="ArtistImage"/>
        <div className="artistDetails">
          <p className="artistName">{name}</p>
          <p className="artistFollowers"><b>{followers} Followers</b></p>
          <p className="artistGenres">{genres.join(", ")}</p>
        </div>
        
      </div>
    )
  }
}

export default Artist;