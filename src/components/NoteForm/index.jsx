import React from 'react';
import {FaBan , FaCheck} from "react-icons/fa"
import "./styles.css";
export default function NoteForm(){
  return(
    <form action="" className="note-menu">
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" placeholder="Informe um titulo"/>
      </div>

      <div>
        <label htmlFor="note">Nota</label>
        <textarea  id="" type="text" rows="10" placeholder="Escreva sua nota"/>  
      </div>

      <div className="buttons">
        <button className="cancel">
          <FaBan className="icon-cancelar"/>
        </button>

        <button type= "submit" className="confirma">
            <FaCheck className="icon-confirma"/>
        </button>
      </div>
  
    </form>
  )
}
