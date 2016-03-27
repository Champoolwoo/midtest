/* global describe,it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line

describe('test Ban9Jin', function () {
  it('Select 1 Book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .wait(3000)
      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('100')
  })
})
