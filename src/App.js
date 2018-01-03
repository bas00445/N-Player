import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

// Material Components
import AppBar from 'material-ui/AppBar';

// Component 
import NoteCreator from './containers/note-creator/note-creator';
import NoteFilter from './containers/note-filter/note-filter';
import NoteList from './containers/note-list/note-list';

const myStore = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={myStore}>
          <div>
            <AppBar
              showMenuIconButton={false}
              title="Redux Todo"
            />
            <div className={"container app-container"}>
              <NoteCreator />
              <NoteFilter />
              <NoteList />
            </div >
          </div>
        </Provider>
      </MuiThemeProvider>

    );
  }
}

export default App;
