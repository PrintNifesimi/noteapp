import { Title, Note, NoteType } from "./styles";
function notesDisplay(props) {
  const showNotes = (note) => {
    return (
      <tr>
        <th scope="row">{note.id}</th>
        <td>
          <div className="row">
            <div
              style={{
                fontWeight: 750,
                display: "inline-block",
              }}
            >
              {note.name + " "}
              <NoteType
                color={() => {
                  if (note.type === "!!!") {
                    return "red";
                  }
                }}
              >
                {note.type}
              </NoteType>
            </div>
          </div>
          <div className="row">
            <Note>{note.note}</Note>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <Title>Notes</Title>
      </div>
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>{props.notes.map(showNotes)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default notesDisplay;
