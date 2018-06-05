import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.onFieldUpdate(this.props.id, event.target.value);
  }

  render() {
    return(
      <div className="form-group">
        <label
          className="label">
          {this.props.label}
        </label>
        <input
          type={this.props.type}
          onChange={this.handleOnChange}
          placeholder={this.props.placeholder}
          value={this.props.value}
          className="input"
        />
      </div>
    );
  }
};

TextField.propTypes = {
  onFieldUpdate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  onFieldUpdate: Function.prototype,
};

export default TextField;
