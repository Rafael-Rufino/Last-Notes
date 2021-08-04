import React, {useState} from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteList } from "../../context/NoteListContext";
import "./styles.css";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {noteList, setNoteList} = useNoteList();


  function HandleTitle(e) {
    setTitle(e.target.value)
 

  }
  function handleDescription(e){
    setDescription(e.target.value)


  }

  function handleSubmit(e){
   e.preventDefault();
   setNoteList([
     ...noteList,
     {
       id: String(Math.floor(Math.random() * 1000)),
       title,
       description,
     },
   ]);
    
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
        <button className="cancel">
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
