import { toArray } from '../../src/js/helpers';
import { expect } from 'chai';

describe('Helpers', () => {
  it('should return a list of array based on the separator', () => {
    expect(toArray('header-logo', '-')).to.eql(['header', 'logo'])
  })

  it('should remove spaces between the strings', () => {
    expect(toArray('header  - logo   ', '-')).to.eql(['header', 'logo'])
  })
})
