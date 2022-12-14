import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {
  const host = process.env.REACT_APP_HOST;
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

//Get all Notes
const getNotes = async (URL=`${host}/api/notes/fetchallnotes`) => {
  try {
    const response = await fetch(URL,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    })
    const json = await response.json();
    setNotes(json)

  } catch (error) {
    console.log(error.message);
  }
}

//Add a Note
const addNote = async (title, description, tag) => {
  try {
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
      const json = await response.json();
      setNotes(notes.concat(json))
      showAlert('Notes added successfully','success')
  } catch (error) {
      console.log(error.message);
  }
}
//Delete a Note from authenticated user
const deleteNote = async (id)=> {
  try {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setNotes(notes.filter(note=>note._id!==id))
    showAlert('Notes deleted successfully','success')
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}
//Delete a Note from Admin user
const deleteAllNote = async (id)=> {
  try {
    const response = await fetch(`${host}/api/admin/deletenote/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setNotes(notes.filter(note=>note._id!==id))
    showAlert('Notes deleted successfully','success')
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}

//Edit a Note
const editNote = async (id, title, description, tag) => {
  //API Call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type' : 'application/json',
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({title, description, tag})
  });
  const json = await response.json();

  //local array update
  setNotes(notes.map(e=>e._id===id?({...e,title,description,tag}):e))
  showAlert('Notes updated successfully','success')
  console.log(json);
}

//Alert State
const [alert, setAlert] = useState({
  message:"",
  type: "",
});
//Alert Function
const showAlert= (message, type) => {
  setAlert({ message, type  })
  setTimeout(()=>{
    setAlert({    message:"",
    type: "",});
  },3000)
}

//Search Keywords
const [keywords, setKeywords] = useState("");
//Total keywords matched found in document
const [totalKeywords, setTotalKeywords] = useState("");

  return (
    <div>
        <NoteContext.Provider value={{notes, setNotes, getNotes, addNote, deleteNote, deleteAllNote, editNote, alert, showAlert, keywords, setKeywords, totalKeywords, setTotalKeywords}}>
            {props.children}
        </NoteContext.Provider>
    </div>
  )
}

export default NoteState
