import { useState } from "react";
import { Title } from "./styles";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      type: type,
      date: date,
      keyword: keyword,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <Title>Search for a Note</Title>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            className="form-control"
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <select
            className="form-control"
            id="type-field"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option type="disabled" value="Select">
              Select
            </option>
            <option value="!">!</option>
            <option value="!!">!!</option>
            <option value="!!!">!!!</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="date-field">Date:</label>
          <input
            className="form-control"
            id="date-field"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="keyword-field">Keywords:</label>
          <input
            className="form-control"
            id="keyword-field"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
