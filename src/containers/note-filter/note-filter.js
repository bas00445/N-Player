import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import './note-filter.css';

class NoteFilter extends Component {

  render() {
    return (
      <div className="container ">
      <Card className="full-width note-filter-container">
        <div className="container">
          <div className="row">

          </div>
          <RadioButtonGroup name="filter" defaultSelected="all">
            <RadioButton className="radio-btn"
              value="all"
              label="Show all"
            />
            <RadioButton className="radio-btn"
              value="completed"
              label="Completed"
            />
            <RadioButton className="radio-btn"
              value="inCompleted"
              label="Incompleted"
            />
          </RadioButtonGroup>
        </div>
      </Card>
      </div>

    );
  }
}

export default NoteFilter