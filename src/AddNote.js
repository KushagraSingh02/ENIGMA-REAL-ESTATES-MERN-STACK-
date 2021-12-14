import React, { useContext, useEffect } from "react";
import noteContext from "./context/notes/noteContext";
import Notes from './Components/Notes';
import { Alert } from "./Components/Alert";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";


function AddNote() {

    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>




            {/* <Alert message="Trying to build Post Property" /> */}
            <div className="container my-3">

                <div>
                    <img className="notes_animation" src="https://i.imgur.com/Q5IhUpF.gif" style={{height:'auto',
                    width:'auto',marginLeft: '37%'}}></img>
            </div>
            <br/>
            <h1 style={{ alignContent: "center" }}>Post New Property</h1>

            <form className="container my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Post</button>
            </form>


        </div>

            
        
        </>
    )
}

export default AddNote