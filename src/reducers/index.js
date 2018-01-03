import { combineReducers } from 'redux';
import NoteReducer from './note-reducer';
import NoteFilterReducer from './note-filter-reducer';

const allReducers = combineReducers({
  notes: NoteReducer,
  filter: NoteFilterReducer
})

export default allReducers;