import { rest } from 'msw';
import { getUser } from './resolvers/user';
import { newQuestion } from './resolvers/question';

export const handlers = [
  rest.get('/user', getUser),
  rest.post('/question', newQuestion),
];
