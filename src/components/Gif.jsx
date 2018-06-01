import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img className="gif" alt="" src={`https://media.giphy.com/media/${props.gifId}/giphy.gif`} />
    </div>
  );
};

export default Gif;

