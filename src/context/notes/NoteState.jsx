import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5132"
  const notesInit = [];
  const [notes, setNotes] = useState(notesInit);

  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
    })
    const json =  await response.json()
    // console.log(json);
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
      body: JSON.stringify({title, description, tag})
    })
    const note =  await response.json()
    setNotes(notes.concat(note));
    console.log(note);
  };
  const deleteNote = async (id) => {
    //eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
    })
    // const json = response.json()
    // console.log(json);

    console.log("deleting note " + id);
    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    
//eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
      body: JSON.stringify({title, description, tag})
    })
    // const json =  await response.json()
    // console.log(json);


    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
