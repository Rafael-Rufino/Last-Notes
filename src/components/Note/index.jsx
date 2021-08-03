import React,{useState} from 'react';
import "./styles.css";


export default function Note(){
  const [highlight, setHighlight] = useState(false);

  return (
    <div className={`note ${highlight ? "highlight": ""}`}
      onClick={() => {
        setHighlight(!highlight)} 
      }
    >
      <h2 className="title">Titulo Exemplo teste</h2>
      <hr />
      <p className="note-description">
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
        Descrição de exemplo
      </p>
    </div> 
  );
  
}