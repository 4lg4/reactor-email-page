import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaField extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.onFieldUpdate(this.props.id, event.target.value);
  }

  render() {
    return(
      <div>
        <label
          className="label">
          {this.props.label}
        </label>
        <textarea
          className="textarea"
          onChange={this.handleOnChange}
          value={this.props.value}
        />
      </div>
    );
  }
};

TextAreaField.propTypes = {
  onFieldUpdate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextAreaField;
