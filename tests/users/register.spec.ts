import request from 'supertest';
import app from '../../src/app';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/config/data-source';
import { truncateTables } from '../utlis';

describe('POST /auth/register', () => {
    let connection: DataSource;

    beforeAll(async () => {
        connection = await AppDataSource.initialize();
    });
    beforeEach(async () => {
        // Data truncation
        await truncateTables(connection);
    });
    afterAll(async () => {
        await connection.destroy();
    });

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

        it('should persist the user in database', async () => {
            //Arrange
            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'bq4t0@example.com',
                password: 'password',
            };
            //Act
            await request(app).post('/auth/register').send(userData);
            //Assert
            const userRepositiory = connection.getRepository('User');
            const users = await userRepositiory.find();
            expect(users.length).toBe(1);
        });
    });
    describe('Field are missing', () => {});
});
