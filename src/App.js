import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Component 
import NoteCreator from './containers/note-creator/note-creator';
import NoteFilter from './containers/note-filter/note-filter';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={"container"}>
          <NoteCreator />
          <NoteFilter />
        </div >
      </MuiThemeProvider>

    );
  }
}

export default App;
