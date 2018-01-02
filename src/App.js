import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Component 
import NoteCreator from './containers/note-creator';

class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <MuiThemeProvider>
          <NoteCreator />
        </MuiThemeProvider>

      </div >
    );
  }
}

export default App;
