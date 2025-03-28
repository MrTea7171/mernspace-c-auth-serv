import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('should return 201 status code', async () => {
            //Arrange
            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'bq4t0@example.com',
                password: 'password',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            //Assert
            expect(response.statusCode).toBe(201);
        });

        it('should return valid json response', async () => {
            //Arrange
            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'bq4t0@example.com',
                password: 'password',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            //Assert
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            );
        });
    });
    describe('Field are missing', () => {});
});
