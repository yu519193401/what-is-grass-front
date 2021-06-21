import { Resolver } from './resolverType';

export const getUser: Resolver = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      username: 'atg',
    })
  );
};
