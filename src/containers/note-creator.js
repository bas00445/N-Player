import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './note-creator.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class NoteCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: '',
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
    console.log(this.state.titleValue, this.state.bodyValue);
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
              <div style={{marginBottom: 10}}>
                <TextField onChange={(event) => {this.handleTitleValue(event)}}
                  className="full-width"
                  floatingLabelText="Input a title"
                  value={this.state.titleValue}
                />
                <TextField onChange={(event) => {this.handleBodyValue(event)}}
                  className="full-width"
                  floatingLabelText="Input a body"
                />
              </div>
              <div id="add-btn-container">
                <RaisedButton onClick={() => {this.onAddNote()}}
                label="Add" primary={true} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCreator;