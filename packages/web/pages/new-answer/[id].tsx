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
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { example: [{ sentence: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'example',
    control: control,
  });

  const onAppendExample = (defaultValue: { example?: string }) => {
    const { example } = getValues();
    const emptyFields = example.filter((e) => e.sentence === '');

    if (emptyFields.length === 0) {
      append(defaultValue);
    }
  };

  const onRemoveExample = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const disableRemove = fields.length === 1;
  const disableAppend =
    watch('example').filter((e) => e.sentence === '').length !== 0;

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
            <button
              type="button"
              onClick={() => onRemoveExample(index)}
              disabled={disableRemove}
            >
              この例文を削除
            </button>
            <br />
          </label>
        ))}
        <button
          type="button"
          onClick={() => onAppendExample({})}
          disabled={disableAppend}
        >
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
