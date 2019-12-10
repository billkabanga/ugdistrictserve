const chai = require('chai');
const expect = chai.expect;
const { districtsObject } = require('../index');

describe('it returns an object with districts in Uganda', () => {
  it('returns an object', () => {
    expect(typeof districtsObject).to.equal('object')
  })

  it('should be an object with a list of all districts', () => {
    const districts = districtsObject.districts;
    expect(districts.length).to.equal(112)
  })
})
