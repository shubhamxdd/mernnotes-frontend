import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext"
import AddNote from "./AddNote";
import { Noteitem } from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, addNote} = context;
  return (
    <div>
      <AddNote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
