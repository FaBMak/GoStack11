import {Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld (request: Request, response: Response) {
    const user = createUser({
        name: 'Fabricio',
        email: 'fabricioelias@gmail.com',
        password: '123456',
        techs: ['Node', 'React']
    });
    return response.json('Hello World!');
}