import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddAnswerMutation } from '@what-is-grass/shared';

type FormValues = {
  definition: string;
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
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({
    definition,
    origin,
    note,
  }) => {
    addAnswer({
      index_id: +id,
      definition: definition,
      origin: origin,
      note: note,
    });
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
        <label>
          例文: <input type="text" />
        </label>
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
