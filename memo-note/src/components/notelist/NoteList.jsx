import React from 'react';
import "./notelist.css";
import ClearIcon from '@mui/icons-material/Clear';


export default function NoteList({id,text,date,clearMemo}) {


    return (
        <div className="NoteListContainer">
            <span>{text}</span>
            <div className="NoteListBottom">
                <small className="NoteDate">{date}</small>
                <ClearIcon 
                    className="clearMemo"
                    onClick={()=>clearMemo(id)}
                />
            </div>         
        </div>
    )
}
