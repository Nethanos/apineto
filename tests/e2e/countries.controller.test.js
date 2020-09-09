const request = require('supertest');
const dateRegex = require('../../src/utils/date-template-regex');
const app = require('../../src/app');

const requestApiEndpoint = () => {
  return request(app).get('/v1/countries');
}

test('should respond with status 200', async () => {
  const response = await requestApiEndpoint();
  expect(response.statusCode).toBe(200);
  expect(response.status).toBe(200);

});

test('response should be an array', async () => {
  const response = await requestApiEndpoint();
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.status).toBe(200);

});

test('response should have 5 items', async () => {
  const response = await requestApiEndpoint();
  expect(response.body.length).toBe(5);
  expect(response.status).toBe(200);

});

test('response should be sorted by confirmed cases', async () => {
  const response = await requestApiEndpoint();
  expect(response.body[0].country).toBe('USA');
  expect(response.body[4].country).toBe('Peru');
  expect(response.status).toBe(200);

});

test('last updated date should be in dd/mm/yyyy format', async () => {
  const response = await requestApiEndpoint();
  expect(response.body[1].updatedAt.match(dateRegex)).not.toBeNull();
  expect(response.status).toBe(200);

});