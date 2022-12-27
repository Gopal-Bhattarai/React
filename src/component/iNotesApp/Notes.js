import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import NoteContext from './context/NoteContext';
import UserContext from './context/UserContext';
import Noteitem from './Noteitem';

const Notes = () => {
const {notes, getNotes, editNote} = useContext(NoteContext);
const {getUser} = useContext(UserContext);
const modalRef = useRef(null);
const modalXRef = useRef(null);
const [note, setNote] = useState({_id:"", title:"",description:"",tag:""})
const navigate = useNavigate();

useEffect(()=>{
  localStorage.getItem('token') ? getNotes() : navigate("/inotes/login")
  getUser();
    //eslint-disable-next-line
},[])

const updateNote = ({_id, title, description, tag})=> {
  modalRef?.current.click();
  setNote({_id, title, description, tag});
}

const onChange = (e) =>{
  //e.preventDefaults();
  setNote({...note,[e.target.name]: e.target.value})
}

const handleClick = (e) => {
  e.preventDefault(); 
  editNote(note._id, note.title, note.description, note.tag)
  modalXRef?.current.click();
}

  return (
    <>
    <AddNote />
    <button type="button" ref={modalRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      MODAL
    </button>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                <div id="emailHelp" className="form-text">Title of your note.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button ref={modalXRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
          </div>
        </div>
      </div>
    </div>

    <div className="row my-4">
    <h1>My Notes...</h1>
    {notes.length===0 && <div className='card m-3'><h5>No Notes to display</h5></div>}
    {notes.map(note=>{
        return (
        <Noteitem note={note} updateNote={updateNote} key={note._id}/>
        )
    })}
    </div>
    </>
  )
}

export default Notes
