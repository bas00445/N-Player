import React, { Component } from 'react';

import './note-creator.css';

// Material Components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { addNote } from '../../actions';

class NoteCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: '',
      noteId: 0,
    }
  }

  handleTitleValue(event) {
    this.setState({
      titleValue: event.target.value
    });
  }

  handleBodyValue(event) {
    this.setState({
      bodyValue: event.target.value
    });
  }

  onAddNote() {
    this.props.addNote({
      title: this.state.titleValue,
      body: this.state.bodyValue,
      id: this.state.noteId,
      complete: false
    })

    this.setState({
      noteId: this.state.noteId + 1
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log('Note-creator:', nextProps);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Card className="full-width card">
              <div>
                Create a Note
              </div>
              <div style={{ marginBottom: 10 }}>
                <TextField onChange={(event) => { this.handleTitleValue(event) }}
                  className="full-width"
                  floatingLabelText="Title"
                  value={this.state.titleValue}
                />
                <TextField onChange={(event) => { this.handleBodyValue(event) }}
                  className="full-width"
                  floatingLabelText="Body"
                />
              </div>
              <div id="add-btn-container">
                <RaisedButton onClick={() => { this.onAddNote() }}
                  label="Add" primary={true} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNote: addNote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreator);