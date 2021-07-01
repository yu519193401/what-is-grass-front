import { rest } from 'msw';
import { getUser } from './resolvers/user';
import { newQuestion } from './resolvers/question';
import { newAnswer } from './resolvers/answer';

export const handlers = [
  rest.get('/user', getUser),
  rest.post('/question', newQuestion),
  rest.post('/answer', newAnswer),
];
