import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

// Component 
import NoteCreator from './containers/note-creator/note-creator';
import NoteFilter from './containers/note-filter/note-filter';

const myStore = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={myStore}>
          <div className={"container"}>
            <NoteCreator />
            <NoteFilter />
          </div >
        </Provider>
      </MuiThemeProvider>

    );
  }
}

export default App;
