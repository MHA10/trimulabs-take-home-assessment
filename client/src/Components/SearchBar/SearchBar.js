import React, { Fragment, useState } from "react";
import Jobs from "../Jobs/Jobs";
import "./SearchBar.scss";

const SearchBar = () => {
  // initializing the state for the form data
  const [formData, setFormData] = useState({
    searchQuery: "",
  });

  const { searchQuery } = formData;

  // on change event handler for the search box
  const onChange = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <Fragment>
      <div className="form-outline searchbar">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Type query"
          aria-label="Search"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => onChange(e)}
        />
      </div>
      <Jobs searchQuery={formData.searchQuery} />
    </Fragment>
  );
};

export default SearchBar;
