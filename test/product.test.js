const request = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('CRUD Productos', () => {
  it('Debe listar productos', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
