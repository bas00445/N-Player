import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import './note-filter.css';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { setFilterType } from '../../actions';

class NoteFilter extends Component {

  onChangeFilterType(filterType) {
    this.props.setFilterType(filterType);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Note-filter:', nextProps);
  }

  render() {
    return (
      <div className="container">
        <Card className="full-width note-filter-container card">
          <div className="container">
            <div className="row">

            </div>
            <RadioButtonGroup name="filter" defaultSelected="all"
              onChange={(event, value) => { this.onChangeFilterType(value) }}>
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

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFilterType: setFilterType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFilter);