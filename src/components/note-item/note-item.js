import React, { Component } from 'react';

import './note-item.css';

// Material Components
import { Card } from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class NoteItem extends Component {

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <Card className="card">

          <div className="note-title">{this.props.note.title}</div>
          <IconMenu className="note-menu"
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem primaryText="Checkout" onClick={() => { this.props.onCheckout() }} />
            <MenuItem primaryText="Delete" onClick={() => { this.props.onDelete() }} />
          </IconMenu>

          <div>{this.props.note.body}</div>
          <div>{this.props.note.complete.toString()}</div>
        </Card>
      </div>
    );
  }
}

export default NoteItem;