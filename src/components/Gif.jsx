import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.gifId);
  }
  
  render() {
    return (
      <img className="gif" alt="" src={`https://media.giphy.com/media/${this.props.gifId}/giphy.gif`} onClick={this.handleClick} />
    );
  }
}

export default Gif;

