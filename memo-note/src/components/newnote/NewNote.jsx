import React from 'react'
import "./newnote.css";
import {useState,useEffect} from "react";


export default function NewNote({addMemo}) {

    const noteLength = 360;
    const [text,setText] = useState('');

    const textChange = (event) => {
        if(noteLength - event.target.value.length >= 0) {
            setText(event.target.value);
        }
    }

    const saveMemo = () => {
        if(text.trim().length > 0) {
            addMemo(text);
            setText('')
        }
    }
    return (
        <div className="newNoteContainer">
            <textarea 
            cols="35" 
            rows="10"
            placeholder='Type here...'
            value={text}
            onChange={textChange}
            ></textarea>
            <div className="noteBottom">
                <small>{noteLength - text.length} Remaining</small>
                <button className="saveButton" onClick={saveMemo}>Add</button>
            </div>
        </div>
    )
}
