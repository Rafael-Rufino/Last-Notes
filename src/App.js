import React from 'react'
import Actions from './components/Actions';
import Header from './components/Header';
import Logo from './components/Logo';
import NotesArea from './components/NotesArea';
import Notes from './components/Notes';

import NoteListProvider from "./context/NoteListContext";
import HighlightProvider from "./context/HighlightContext";
function App() {
  return (
    <NoteListProvider>
      <HighlightProvider>
        <Header>
          <Logo />
          <Actions />
        </Header>
        <NotesArea>
          <Notes />
        </NotesArea>
      </HighlightProvider>
    </NoteListProvider>
      
  );
}

export default App;
