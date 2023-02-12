import { useState } from "react";
import AddNote from "./addNote";
import "./App.css";
import NotesDisplay from "./NotesDisplay";
import SearchBar from "./SearchBar";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ Notes: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addNoteToData = (note) => {
    let notes = data["Notes"];
    note.id = notes.length + 1;
    notes.push(note);
    setData({ Notes: notes });
  };
  const keywordProcess = (filterKeyword, itemKeywords) => {
    for (const keyword of itemKeywords) {
      if (keyword === filterKeyword) {
        return true;
      }
    }
    return false;
  };
  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name) {
      return data;
    }
    console.log(data.length);
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.type !== "Select" && filters.type !== item.type) {
        continue;
      }
      if (filters.date !== "" && filters.date !== item.date) {
        continue;
      }
      /* if (keywordProcess(filters.keyword, item.keyword)) {
        continue;
      }*/

      filteredData.push(item);
    }

    return filteredData;
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddNote addNote={addNoteToData} />
      </div>
      <div className="row mt-3">
        <NotesDisplay notes={filterData(data["Notes"])} />
      </div>
    </div>
  );
}

export default App;
