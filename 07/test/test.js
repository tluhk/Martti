// Impordime assert mooduli
const chai = require('chai');
const mocha = require('mocha');

const { describe, it } = mocha;
const { expect, assert } = chai;
const sum = require('./sum');

describe('sum', () => {
  it('should return 3 when the input is 1 and 2', () => {
    expect(sum(1, 2)).to.equal(3);
  });

  it('should return 5 when the input is 2 and 3', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should return 0 when the input is 0 and 0', () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});
