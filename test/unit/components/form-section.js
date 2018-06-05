
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FormSection from '../../../src/js/components/form-section';

describe('FormSection component', () => {
  let formSection, callback;

  before(() => {
    callback = sinon.spy();
    formSection = shallow(
      <FormSection
        from={''}
        to={''}
        cc={''}
        bcc={''}
        subject={''}
        text={''}
        onFieldUpdate={callback}
      />
    );
  });

  it('should NOT run a given function via a onClick prop by default', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the internal components', () => {
    expect(formSection.find('TextField').length).to.eql(5);
    expect(formSection.find('TextAreaField').length).to.eql(1);
  });

  it('should render the correct text field components', () => {
    expect(formSection.find('#from').length).to.eql(1);
    expect(formSection.find('#to').length).to.eql(1);
    expect(formSection.find('#cc').length).to.eql(1);
    expect(formSection.find('#bcc').length).to.eql(1);
    expect(formSection.find('#subject').length).to.eql(1);
    expect(formSection.find('#text').length).to.eql(1);
  });

  describe('When textfield value is changed', () => {
    before(() => {
      const [textfield] = formSection.find('TextField').getElements();
      textfield.props.onFieldUpdate();
    });

    it('should runs a given function via a onChange prop', () => {
      expect(callback.called).to.eql(true);
    });
  });

});
