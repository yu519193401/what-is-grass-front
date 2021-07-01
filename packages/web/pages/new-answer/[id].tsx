import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const useFormValue: <T>(updater: (e: React.ChangeEvent<T>) => string) => {
  value: string;
  onChange: (e: React.ChangeEvent<T>) => void;
} = (updater) => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (e) => {
      setValue(updater(e));
    },
  };
};

const NewAnswerPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const textAreaUpdater = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return e.target.value;
  };

  const definition = useFormValue<HTMLTextAreaElement>(textAreaUpdater);

  const origin = useFormValue<HTMLTextAreaElement>(textAreaUpdater);

  const note = useFormValue<HTMLTextAreaElement>(textAreaUpdater);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index_id: id,
        definition: definition.value,
        origin: origin.value,
        note: note.value,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <Layout title="New Answer">
      <h1>回答してあげよう</h1>
      <form onSubmit={handleSubmit}>
        <label>
          意味:
          <textarea {...definition} />
        </label>
        <br />
        <label>
          由来: <textarea {...origin} />
        </label>
        <br />
        <label>
          例文: <input type="text" />
        </label>
        <br />
        <label>
          備考: <textarea {...note} />
        </label>
        <br />
        <input type="submit" value="回答" />
      </form>
    </Layout>
  );
};

export default NewAnswerPage;
