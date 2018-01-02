import React, { Component } from 'react';

// Material Components
import { Card } from 'material-ui/Card';

class NoteItem extends Component {

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <Card className="card">
          <div>{this.props.note.id}</div>
          <div>{this.props.note.title}</div>
          <div>{this.props.note.body}</div>
          <div>{this.props.note.complete.toString()}</div>
        </Card>
      </div>
    );
  }
}

export default NoteItem;