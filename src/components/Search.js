import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/actions/actions";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.text);

  const handleChange = (e) => {
    dispatch(search(e.target.value.trim()));
  };

  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      value={text}
      placeholder="Search"
    />
  );
};

export default Search;
