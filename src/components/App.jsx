import React, { Component } from 'react';
import Search from './Search';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: "1L5YuA6wpKkNO" },
        { id: "csHW5fcFNP6dQ5jhsH"},
      ],
      selectedGif: "csHW5fcFNP6dQ5jhsH",
      query: "",
    };
  }


  handleChange = (event) => {
    console.log(event.target)
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search />
          <Gif gifId={this.state.selectedGif} handleChange={this.handleChange} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
