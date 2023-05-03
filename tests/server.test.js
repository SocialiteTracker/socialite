const request = require('supertest');
const app = require('./testApp');
const PORT = 4000;

beforeAll(() => {
  app.listen(PORT, () =>
    console.log(`server is listening on port ${PORT}`)
  );
});

describe('Server routes', () => {
  test('It should respone with 404 to unknown routes', async () => {
    const response = await request(app).get('/cannotfindit');
    expect(response.statusCode).toBe(404);
  });

  test('It should respone with 301 posting to /api/login', async () => {
    const response = await request(app).post('/api/login');
    expect(response.statusCode).toBe(301);
  });

  test('It should respone with 301 posting to /api/signup', async () => {
    const response = await request(app).post('/api/signup');
    expect(response.statusCode).toBe(301);
  });

  test('It should respone with 200 posting to /api/socialMedia', async () => {
    const response = await request(app).post('/api/socialMedia');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 posting to /api/socialMedia', async () => {
    const response = await request(app).delete('/api/socialMedia');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 posting to /api/getAllSocials', async () => {
    const response = await request(app).get('/api/getAllSocials');
    expect(response.statusCode).toBe(200);
  });

});