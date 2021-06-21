import { rest } from 'msw';
import { getUser } from './resolvers/user';

export const handlers = [rest.get('/user', getUser)];
