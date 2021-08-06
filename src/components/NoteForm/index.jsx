import React, {useEffect} from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteList } from "../../context/NoteListContext";
import "./styles.css";
import { useNoteForm } from "../../context/NoteFormContext";
import  {useHighlight} from "../../context/HighlightContext";

export default function NoteForm() {
  
  const {noteList, setNoteList} = useNoteList();
  const  {
    title,
    setTitle,
    description,
    setDescription,
    setVisibleForm
  } = useNoteForm();
  const {highlight, setHighlight} = useHighlight();

  useEffect(() => {
    saveLocalNotes();
  }, [noteList]);


  function HandleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e){
    setDescription(e.target.value)
  }

  function handleSubmit(e){
   e.preventDefault();
     if(highlight){
       noteList.map((note) =>{
         if(note.id === highlight){
           note.title = title;
           note.description = description;
         }
       });
       setNoteList([...noteList]);
   }
   else{
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description,
      },
    ]); 

   }
  }

  function handleCancel(e){
    e.preventDefault();
    setHighlight(false);
    setVisibleForm(false);


  }

  function saveLocalNotes(){
    localStorage.setItem("notes", JSON.stringify(noteList));

  }

  return (
    <form action="" className="note-menu">
      <div>
        <label htmlFor="title">Titulo</label>
        <input 
            type="text" 
            id="title" 
            value={title}
            onChange={HandleTitle}
            placeholder="Informe um titulo" 
        />
      </div>

      <div>
        <label htmlFor="note">Nota</label>
        <textarea 
            id="note"
            value={description}
            onChange={handleDescription}
            type="text"
            rows="10"
            placeholder="Escreva sua nota"
        />
      </div>

      <div className="buttons">
        <button className="cancel" onClick={handleCancel}>
          <FaBan className="icon-cancelar" />
        </button>

        <button 
          type="submit"
          className="confirma"
          onClick={handleSubmit}
        >
          <FaCheck className="icon-confirma" />
        </button>
      </div>
    </form>
  );
}
