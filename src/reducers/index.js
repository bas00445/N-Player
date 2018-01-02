import { combineReducers } from 'redux';
import NoteReducer from './note-reducer';

const allReducers = combineReducers({
  notes: NoteReducer
})

export default allReducers;