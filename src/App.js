import React from 'react';
import logo from './logo.svg';
import './App.sass';

function App() {
  return (
    pug`
      .c-page-wrapper
        .e-header
          .c-header
            h1 fumi.ninja 
        .e-content aiueo
        .e-footer
          .c-controls
            p ninja 
    `
  );
}

export default App;
