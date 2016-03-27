/* global describe,it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line

describe('Test Web Ban9Jin', function () {
  it('1-2 1 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')

      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('180')
  })

  it('1-7 1 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b4')
      .click('#b5')
      .click('#b6')
      .click('#b7')
      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('280')
  })

  it('1-7 2 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b4')
      .click('#b5')
      .click('#b6')
      .click('#b7')
      .click('#b1')
      .click('#b2')
      .click('#b3')
      .click('#b4')
      .click('#b5')
      .click('#b6')
      .click('#b7')
      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('560')
  })

  it('1 buy 3,2 buy 2,3 buy 1', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b2')
      .click('#b3')
      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('520')
  })

  it('1 buy 2,2 buy 2', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#b1')
      .click('#b1')
      .click('#b2')
      .click('#b2')
      .evaluate(function () {
        return document.querySelector('#summary').innerHTML
      })
    expect(link).to.equal('360')
  })
})
