const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('應該回傳 Hello CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello CI/CD!');
  });
});