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
});
