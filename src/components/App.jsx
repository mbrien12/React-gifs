import React, { Component } from 'react';
import giphy from 'giphy-api';
import Search from './Search';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
      ],
      selectedGif: "FgTqKY4QECTOU",
      query: "",
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
    this.search(this.state.query);
  };

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  search = (query) => {
    giphy('5n4xx1mRX9Pz9fmu2fmzve6PWfjD7QfF').search({
      q: query,
      limit: 10,
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search handleChange={this.handleChange} />
          <Gif className="selected-gif" gifId={this.state.selectedGif} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
