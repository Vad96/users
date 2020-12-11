import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/actions/actions";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.text);
  console.log(text);

  const handleChange = (e) => {
    dispatch(search(e.target.value.trim()));
  };

  return (
    <input
      onChange={handleChange}
      type="search"
      value={text}
      className="search"
      placeholder="Search"
    />
  );
};

export default Search;
