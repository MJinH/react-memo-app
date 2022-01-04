import React, { memo } from 'react'
import NewNote from '../newnote/NewNote';
import NoteList from '../notelist/NoteList'
import "./note.css";
import {useState,useEffect} from "react";
import {nanoid} from "nanoid";
export default function Note({title}) {
    const [memos,setMemos] = useState([])

    const addMemo = (text) => {
        const date = new Date();
        const newMemo = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        };
        
        const newMemos = [...memos,newMemo];
        setMemos(newMemos);
    }

    const clearMemo = (id) => {
        const newMemos = memos.filter((memo) => memo.id !== id);
        setMemos(newMemos);
    }

    // order matters
    useEffect(() => {
        const getMemos = JSON.parse(
            localStorage.getItem(
                'Jindocs-memo'
            )
        );
        setMemos(getMemos)
    },[])

    
    useEffect(() => {
        localStorage.setItem(
            'Jindocs-memo',
            JSON.stringify(memos)
        );
    },[memos]);



    
    return (
        <div className="NoteContainer">
            {memos.filter(memo => memo.text.toLowerCase().includes(title.toLowerCase())).map((memo) => (
                <NoteList
                    id={memo.id}
                    text={memo.text}
                    date={memo.date}
                    clearMemo={clearMemo}
                />
            ))}
            <NewNote addMemo={addMemo}/>
        </div>
    )
}
