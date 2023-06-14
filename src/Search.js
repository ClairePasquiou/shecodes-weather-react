import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Searchform">
      <form id="searchForm" class="Mb-3">
        <div className="Row search">
          <div class="col-9 form">
            <input
              id="city-input"
              type="search"
              placeholder="Type a City..."
              class="Form-control"
              autocomplete="off"
              input></input>
          </div>
          <div className="Col-3 ">
            <input
              id="searchButton"
              type="submit"
              class="Button"
              value="Search"
              input></input>
          </div>
        </div>
      </form>
    </div>
  );
}
