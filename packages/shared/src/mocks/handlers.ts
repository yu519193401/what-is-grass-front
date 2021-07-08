import { rest } from 'msw';
import { editUser, getUser, newUser } from './resolvers/user';
import { newQuestion, getQuestions } from './resolvers/question';
import { newAnswer, getAnswer } from './resolvers/answer';

export const handlers = [
  rest.get('/user', getUser),
  rest.get('/question', getQuestions),
  rest.get('/answer', getAnswer),
  rest.post('/question', newQuestion),
  rest.post('/answer', newAnswer),
  rest.post('/signup', newUser),
  rest.post('/user/edit', editUser),
];
