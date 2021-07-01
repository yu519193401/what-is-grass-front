import { Resolver } from './resolverType';

export const newAnswer: Resolver = (_, res, ctx) => {
  return res(
    ctx.status(201),
    ctx.json({
      answer_id: 1,
      user_id: 2,
      informative_count: 0,
      index_id: 3,
      definition:
        '髪の毛が亡くなったときに使う単語ですね。気にしてる人もいるので使う時は気をつけましょう。',
      origin:
        'その昔Hagel(ヘーゲル)さんの髪が薄かったのでHagel => 禿げるとなったそうです',
      example: [
        {
          id: 1,
          example_sentence: '彼は20代前半にして禿げていることを気に病んでいる',
        },
      ],
      language_id: 1,
      note: '薄毛は病院で治る時代です。',
      date: '2021-06-29T12:00:00.000+09:00',
    })
  );
};
