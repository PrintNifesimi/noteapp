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
    console.log(data);
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
        <NotesDisplay notes={data["Notes"]} />
      </div>
    </div>
  );
}

export default App;
