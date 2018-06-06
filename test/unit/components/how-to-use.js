import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HowToUse from '../../../src/js/components/how-to-use'

describe('how-to-use.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <HowToUse />
    )
  })

  it('should renders the title', () => {
    expect(wrapper.find('h3').text()).to.eql('How to use');
  })
})
