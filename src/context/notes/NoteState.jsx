import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
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
  const [notes, setNotes] = useState(notesInit)

  const addNote = (title, description, tag)=>{
    console.log("adding note");
    let note =     {
      _id: "63c1a2976155e2741e9fa7be",
      user: "63c1387038d88cf1e9abb074",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-13T18:27:35.772Z",
      __v: 0,
    }
    setNotes(notes.concat(note))
  }
  const deleteNote = ()=>{

  }
  const updateNote = ()=>{

  }
    
  return (
      <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote}}>
          {props.children}
      </NoteContext.Provider>
  )
}

export default NoteState;