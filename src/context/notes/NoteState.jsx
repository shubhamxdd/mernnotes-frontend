import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5132"
  const notesInit = [
    {
      _id: "63c1405de2f352aa5978a16c",
      user: "63c1387038d88cf1e9abb074",
      title: "my title1",
      description: "a kul description1",
      tag: "nahibatana",
      date: "2023-01-13T11:28:29.406Z",
      __v: 0,
    },
    {
      _id: "63c1a2926155e2741e9fa7bc",
      user: "63c1387038d88cf1e9abb074",
      title: "my title21",
      description: "a kul description21",
      tag: "nahibatana",
      date: "2023-01-13T18:27:30.859Z",
      __v: 0,
    },
    {
      _id: "63c1a2976155e2741e9fa7be",
      user: "63c1387038d88cf1e9abb074",
      title: "my title2",
      description: "a kul description2",
      tag: "nahibatana",
      date: "2023-01-13T18:27:35.772Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInit);

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
      body: JSON.stringify({title, description, tag})
    })
    // const json =  response.json()

    console.log("adding note");
    let note = {
      _id: "63c1a2976155e2741e9fa7be",
      user: "63c1387038d88cf1e9abb074",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-13T18:27:35.772Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    console.log("deleting note " + id);
    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMTM4NzAzOGQ4OGNmMWU5YWJiMDc0In0sImlhdCI6MTY3MzYwNzI5N30.65cE8SDCHbGiBnO2vkO-s81FKs7op_xF-m7D570DJLg"
      },
      body: JSON.stringify({title, description, tag})
    })
    const json =  response.json()
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
