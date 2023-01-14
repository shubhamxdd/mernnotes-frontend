import React from "react";

export const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2"></i>
          <i className="fa-solid fa-pen mx-2"></i>
        </div>
      </div>
    </div>
  );
};
