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

export const getQuestions: Resolver = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      indices: [
        {
          index_id: 101,
          index: '大阪どうですか',
          questioner: '001',
          frequently_used_count: 10,
          answer_count: 1,
          best_answer: 'いいところですよ',
          date: '2021-06-21',
        },
        {
          index_id: 102,
          index: 'ECCは何ですか',
          questioner: '002',
          frequently_used_count: 100,
          answer_count: 1,
          best_answer: '学校です',
          date: '2021-06-23',
        },
        {
          index_id: 103,
          index: 'おでんくん？',
          questioner: '003',
          frequently_used_count: 1000,
          answer_count: 1,
          best_answer: '美味しそうだ',
          date: '2021-06-25',
        },
        {
          index_id: 104,
          index: '何を質問したらいいかなぁ？',
          questioner: '004',
          frequently_used_count: 10000,
          answer_count: 1,
          best_answer: 'こんな簡単な事も聞くなん？お前バカっか？',
          date: '2021-06-26',
        },
      ],
    })
  );
};
