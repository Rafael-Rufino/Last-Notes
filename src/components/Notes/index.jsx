import React from 'react';
import { useHighlight } from '../../context/HighlightContext';
import { useNoteList } from '../../context/NoteListContext';

import './styles.css';
import Note from '../Note'


export default function Notes(){
  const {noteList} = useNoteList();
  const {highlight, setHighlight} = useHighlight();
  return (
    <section className="notes">
      {noteList.map((note) => (

          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            highlight={highlight}
            setHighlight={setHighlight}
        
        />
      ))}
    </section>
  );

}
