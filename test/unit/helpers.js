import { toArray, isHtmlElement, isAValidEmail } from '../../src/js/helpers';
import { expect } from 'chai';

describe('Helpers', () => {
  describe('toArray', () => {

    it('should return a list of array based on the separator', () => {
      expect(toArray('header-logo', '-')).to.eql(['header', 'logo'])
    })

    it('should remove spaces between the strings', () => {
      expect(toArray('header  - logo   ', '-')).to.eql(['header', 'logo'])
    })
  })

  describe('isHtmlElement', () => {
    it('should return true if receives a html element', () => {
      expect(isHtmlElement('<p>I am HTML</p>')).to.eql(true)
    })

    it('should return false if does not receive a html element', () => {
      expect(isHtmlElement('I am text')).to.eql(false)
    })
  })

  describe('isAValidEmail', () => {
    it('should return true if receives a valid email', () => {
      expect(isAValidEmail('email@test.com')).to.eql(true)
    })

    it('should return false if receives an invalid email', () => {
      expect(isAValidEmail('I am text')).to.eql(false)
    })
  })
})
