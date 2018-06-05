import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextAreaField from '../../../src/js/components/text-area-field';
import sinon from 'sinon';

describe('TextAreaField component', () => {
  let callback, textAreaField;

  before(() => {
    callback = sinon.spy();
    textAreaField = shallow(
      <TextAreaField
        onFieldUpdate={callback}
        label="My Label"
        value="test"
      />);
  });

  it('should render the label', () => {
    expect(textAreaField.find('.label').text()).to.eql('My Label');
  });

  it('should NOT run a given function via a onClick prop', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the given value into the input', () => {
    expect(textAreaField.find('.textarea').props().value).to.eql('test');
  });

  describe('When textAreaField value is changed', () => {
    before(() => {
      textAreaField.find('.textarea').simulate('change', { target: { value: 'another test'}});
    });

    it('should runs a given function via a onChange prop', () => {
      expect(callback.called).to.eql(true);
    });
  });

});
