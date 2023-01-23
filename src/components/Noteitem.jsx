import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

export const Noteitem = (props) => {
  const context = useContext(noteContext)
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note._id);
            props.showAlert("Note deleted successfully", "success");
          }}></i>
          <i className="fa-solid fa-pen mx-2" onClick={()=>{updateNote(note);
            // props.showAlert("Note updated successfully", "success");
          }}></i>
        </div>
      </div>
    </div>
  );
};
