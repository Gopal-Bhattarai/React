import React, { useContext, useState } from 'react'
import NoteContext from './context/NoteContext';

const AddNote = () => {
const {addNote} = useContext(NoteContext);

const [note, setNote] = useState({title:"",description:"",tag:""})

const onChange = (e) =>{
    setNote({...note,[e.target.name]: e.target.value})
}

const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({title:"",description:"",tag:""})
}

  return (
    <div>
        <div className="container my-3">
        <h1>Add a Note</h1>
        <form className='my-3' onSubmit={handleClick}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
                <div id="emailHelp" className="form-text">Title of your note.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={10} required />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
        </div>
    </div>
  )
}

export default AddNote
