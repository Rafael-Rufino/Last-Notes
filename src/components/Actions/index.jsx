import React from 'react';
import "./styles.css";
import {FaPlus, FaPencilAlt, FaTrash} from "react-icons/fa";
import { useNoteForm } from '../../context/NoteFormContext';
import  {useHighlight} from "../../context/HighlightContext";
import { useNoteList } from '../../context/NoteListContext';

export default function Actions(){
  const {
    visibleForm,
    setVisibleForm,
    setTitle,
    setDescription
  } = useNoteForm();

  const {noteList, setNoteList} = useNoteList();
  const {highlight, setHighlight} = useHighlight();
  
  function handleCreate(){
    if(visibleForm && highlight){
      setTitle("");
      setDescription("");
      setHighlight(false);
    }else{
      setVisibleForm(!visibleForm);
    }

  };
  function handleEdit(){
    if(highlight){
      const highlightedNote = noteList.find((note) => note.id === highlight);
      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
      setVisibleForm(!visibleForm);
    }

  }

  function handleDelete(){
    if(highlight){
      setTitle("");
      setDescription("");
      setHighlight(false);
      const highlightedNote = noteList.findIndex((note) => note.id === highlight);
      noteList.splice(highlightedNote, 1);
      setNoteList([...noteList]);
    }

  }

  return(
    <div className="actions">
      <button className="create" onClick={handleCreate}>
        <FaPlus className="icon"/>

      </button>

      <button className="edit"  onClick={handleEdit}>  
        <FaPencilAlt className={`icon ${!highlight && "disabled"}`} 
     
        />

      </button>

      <button className="delete" onClick={handleDelete}>
        <FaTrash className={`icon ${!highlight && "disabled"}`}
         />
      </button>

    </div>
  )
}