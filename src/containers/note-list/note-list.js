import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { checkoutNote, deleteNote } from '../../actions/index';

// Material Components
import { Card } from 'material-ui/Card';

// Components
import NoteItem from '../../components/note-item/note-item';

class NoteList extends Component {

  renderNotes() {
    return this.props.notes.map((note) => {

      return (
        <NoteItem note={note} key={note.id}/>
      );
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkoutNote: checkoutNote,
    deleteNote: deleteNote,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);