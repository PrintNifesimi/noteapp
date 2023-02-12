import { useState } from "react";
import { Title } from "./styles";
function AddNote(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const date = new Date();
  const today =
    date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
  const [note, setNote] = useState("");
  const [keyword, setKeyword] = useState("");

  const addNoteButtonPressed = () => {
    props.addNote({
      name: name,
      type: type,
      date: today,
      keyword: keyword,
      note: note,
    });
    setName("");
    setType("");
    setNote("");
  };

  return (
    <div className="container">
      <div className="row">
        <Title>Add a new Note</Title>
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
      </div>
      <div className="row mt-3">
        <label htmlFor="keyword-field">Note:</label>
        <textarea
          className="form-control"
          id="note-field"
          type="text"
          value={note}
          onChange={(e) => {
            let note = e.target.value;
            let arr = note.split(" ");
            setKeyword(arr);
            setNote(note);
          }}
        ></textarea>
      </div>
      <div className="row mt-3">
        <button
          className="btn btn-success"
          type="button"
          onClick={addNoteButtonPressed}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
