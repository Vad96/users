import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/actions/actions";
import { useTranslation } from "react-i18next";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.text);
  const { t } = useTranslation();

  const handleChange = (e) => {
    dispatch(search(e.target.value.trim()));
  };

  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      value={text}
      placeholder={t("search")}
    />
  );
};

export default Search;
