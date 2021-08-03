import React from 'react';
import NoteForm from '../NoteForm/';
import "./styles.css";


export default function NotesArea({children}){
  return(
    <article className="notesArea">
      {children}
      <NoteForm/>  
    </article>
  )
  
}