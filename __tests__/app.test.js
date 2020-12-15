const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it(' response for /red receives body', async() => {
    const expectation = '<h1> red </h1>';

    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual(expectation);
  });
  it(' response for /green receives body', async() => {
    const expectation = '<h1> green </h1>';

    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual(expectation);
  });

  it(' response for /blue receives body', async() => {
    const expectation = '<h1> blue </h1>';

    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual(expectation);
  });

  it(' response for / receives body', async() => {
    const expectation = '<h1> hi </h1>';

    const response = await request(app)
      .get('/');

    expect(response.text).toEqual(expectation);
  });

  it('responds with your body when a post is sent on /echo', async() => {
    const response = await request(app)
      .post('/echo')
      .send('<h1> holy moly </h1>');

    expect(response.text).toEqual('<h1> holy moly </h1>');
  });
});
