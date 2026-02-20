// tests/auth.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth', () => {
  it('Debe registrar un usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ nombre: 'Test', email: 'test@test.com', contraseña: '123456' });
    expect(res.statusCode).toEqual(201); // tu controlador devuelve 201 al crear
    expect(res.body).toHaveProperty('token');
  });
});

afterAll(async () => {
   await mongoose.connection.close();
   });