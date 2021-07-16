import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { useAddAnswerMutation } from '@what-is-grass/shared';

type FormValues = {
  definition: string;
  example: { sentence: string }[];
  origin: string;
  note: string;
};

const NewAnswerPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [addAnswer, { isLoading }] = useAddAnswerMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { example: [{ sentence: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'example',
    control: control,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newAnswer = {
      index_id: +id,
      ...data,
      example: data.example.map((e) => e.sentence),
    };
    addAnswer(newAnswer);
  };

  return (
    <Layout title="New Answer">
      <h1>回答してあげよう</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          意味:
          <textarea name="definition" ref={register({ required: true })} />
          {errors.definition && <span>意味だけは答えてちょうだいな</span>}
        </label>
        <br />
        <label>
          由来: <textarea name="origin" ref={register()} />
        </label>
        <br />
        {fields.map((example, index) => (
          <label key={example.id}>
            {`例文${index}: `}
            <input
              type="text"
              name={`example[${index}].sentence`}
              ref={register()}
              defaultValue={example.sentence}
            />
            <button type="button" onClick={() => remove(index)}>
              この例文を削除
            </button>
            <br />
          </label>
        ))}
        <button type="button" onClick={() => append({})}>
          もっと例文を追加
        </button>
        <br />
        <label>
          備考: <textarea name="note" ref={register()} />
        </label>
        <br />
        <input type="submit" disabled={isLoading} />
        {isLoading ? '送信中...' : null}
      </form>
    </Layout>
  );
};

export default NewAnswerPage;
