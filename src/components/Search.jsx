import React from "react";

const Search = (props) => {
  return (
    <form className=" form-search">
      <i style={{ marginRight: '20px' }} className="fas fa-search" />
      <input type="text" onChange={props.handleChange} />
    </form>
  );
};

export default Search;

