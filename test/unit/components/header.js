import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from '../../../src/js/components/header'

describe('header.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <Header />
    )
  })

  it('should renders the logo', () => {
    expect(wrapper.find('.header-logo').length).to.eql(1)
  })
})
