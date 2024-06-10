const request = require('supertest');
const { expect } = require('chai');
const { describe, it } = require('mocha');

const app = require('../app');

const okResponse = {
  success: true,
  message: 'pong',
};

describe('GET /ping', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(okResponse);
  });
});
