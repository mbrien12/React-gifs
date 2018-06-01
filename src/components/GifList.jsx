import React, { Component } from "react";
import Gif from "./Gif";

class GifList extends Component {
  render() {
    return this.props.gifs.map((gif) => {
      return (
        <div className="gif-list">
          <Gif gifId={gif.id} key={gif.id} selectGif={this.props.selectGif} />
        </div>
      );
    });
  }
}

export default GifList;

