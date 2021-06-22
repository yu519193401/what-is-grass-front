import { Resolver } from './resolverType';

export const newQuestion: Resolver = (_, res, ctx) => {
  return res(
    ctx.status(201),
    ctx.json({
      id: 2,
      index: 'くさ',
      language_id: 1,
      date: '2021-06-22T12:00:00.000+09:00',
    })
  );
};
