import React,{Component} from 'react';
import Artist from './Components/Artist';
import Track from './Components/Track';
// import Playbar from './Components/Playbar';
import './Style/App.css';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
  state = {
    query:"",
    artist : "",
    tracks:[],
    followers:0,
    genres:[],
    image:"",
  };
  setQuery=e=> {
    this.setState({query:e.target.value});
  };
  searchArtist =()=> {
    const query = this.state.query;
    fetch(`${API_ADDRESS}/artist/${query}`)
      .then(response => response.json())
      .then(json => {
        const artistItems = json.artists.items[0];
        const artist = artistItems.name;
        const followers = artistItems.followers.total;
        const genres = artistItems.genres;
        const image = artistItems.images[0].url;
        this.setState({artist, followers, genres,image});
        if(json.artists.total>0){
          const artistId = json.artists.items[0].id;
          fetch(`${API_ADDRESS}/artist/${artistId}/top-tracks`)
          .then(res=>res.json())
          .then(tracks=>this.setState(tracks));
        }
      })
      .catch(error => alert(error.message));
  };
  handleKeyPress=(e) => {
    if (e.key === "Enter") {
      this.searchArtist(e);
    }
  };
  render(){
    const {artist,followers, genres,image} = this.state;
    return(
      <div>
       <input onChange={this.setQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
          id="search"/>
        <div className="details">
          {artist?<Artist name={artist} followers={followers} genres={genres} image={image}/>:null}
          {<Track Tracks={this.state.tracks}/>}
        </div>
      </div>
    )
  }
}


export default App;
