import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img src="https://media.giphy.com/media/{props.gifId}/giphy.gif"/>
      <img src="https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif"/>
    </div>
  );
};

export default Gif

