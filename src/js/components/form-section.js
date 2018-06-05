import React from 'react';
import PropTypes from 'prop-types';
import TextField from './text-field';
import TextAreaField from './text-area-field';
import Section from './section';
import Button from './button';

const FormSection = ({
  from,
  to,
  cc,
  bcc,
  subject,
  text,
  onFieldUpdate,
  onSubmit,
}) => {

  return(
    <Section className="hcard-form">
      <h2 className="form-title">Reactor Email Sender</h2>
      <form>
        <h2 className="subtitle">Email details</h2>
        <TextField
          id="from"
          label="From"
          value={from}
          onFieldUpdate={onFieldUpdate}
        />
        <TextField
          id="to"
          label="To" value={to}
          onFieldUpdate={onFieldUpdate}
        />
        <TextField
          id="cc"
          label="CC" value={cc}
          onFieldUpdate={onFieldUpdate}
        />
        <TextField
          id="bcc"
          label="BCC" value={bcc}
          onFieldUpdate={onFieldUpdate}
        />
        <h2 className="subtitle">Email Content</h2>
        <TextField
          id="subject"
          label="Subject"
          value={subject}
          onFieldUpdate={onFieldUpdate}
        />
        <TextAreaField
          id="text"
          label="Text"
          value={text}
          onFieldUpdate={onFieldUpdate}
        />
        <div className="buttons">
          <Button
            onClick={onSubmit}
            className="btn">
              Send Email
          </Button>
        </div>
      </form>
    </Section>
  );
};

FormSection.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  bcc: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onFieldUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormSection;
