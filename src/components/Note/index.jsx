import React from 'react';
import "./styles.css";
import {useHighlight} from '../../context/HighlightContext';
import { useNoteForm } from '../../context/NoteFormContext';

export default function Note({id, title, description}){
  const {highlight, setHighlight} =useHighlight();
  const {setVisibleForm} = useNoteForm();

  return (
    <div 
      id={id}
          className={`note ${highlight === id ? "highlight": ""}`}
          onClick={() => {
            if(highlight === id){
              setVisibleForm(false);
            }else{  
              setHighlight(id);
              setVisibleForm(true);
          }
      }}
    >
      <h2 className="title">
        {title}
        </h2>
      <hr />
      <p className="note-description">
        {description}
      </p>
    </div> 
  );
  
}