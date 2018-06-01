import React from "react";

const Search = (props) => {
  return (
    <form className=" form-search">
      <i className="fas fa-search" />
      <input type="text" name="query" handleChange={props.handleChange} />
    </form>
  );
};

export default Search;

