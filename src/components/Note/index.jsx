import React from 'react';
import "./styles.css";
import {useHighlight} from '../../context/HighlightContext';


export default function Note({id, title, description}){
  const {highlight, setHighlight} =useHighlight();

  return (
    <div 
      id={id}
          className={`note ${highlight ? "highlight": ""}`}
          onClick={() => {
          setHighlight(!highlight)} 
      }
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