import React, { Component } from 'react';
import Search from './Search';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="left-scene">
       
          <Gif gifId={'1L5YuA6wpKkNO'} />
        </div>
        <div className="right-scene">
     
        </div>
      </div>
    );
  }
}


export default App;
