const request = require('supertest');
const app = require('./testApp');
// const PORT = 4000;

// beforeAll(() => {
//   app.listen(PORT, () =>
//     console.log(`server is listening on port ${PORT}`)
//   );
// });

describe('Server routes', () => {
  test('It should respone with 404 to unknown routes', async () => {
    const response = await request(app).get('/cannotfindit');
    expect(response.statusCode).toBe(404);
  });

  test('It should respone with 200 to root', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 getting login', async () => {
    const response = await request(app).get('/login');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 posting to login', async () => {
    const response = await request(app).post('/login');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 getting signup', async () => {
    const response = await request(app).get('/signup');
    expect(response.statusCode).toBe(200);
  });

  test('It should respone with 200 posting to signup', async () => {
    const response = await request(app).post('/signup');
    expect(response.statusCode).toBe(200);
  });
  
});

