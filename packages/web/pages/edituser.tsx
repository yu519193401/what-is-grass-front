import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

const Edit: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const callUser = async () => {
      const res = await fetch('/user');
      const data = await res.json();
      setUsername(data.username);
      setEmail(data.email);
    };
    callUser();
  }, []);

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch('/user/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email }),
    });
    const data = await res.json();
    console.log(data);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Layout title="UserEdit">
      <h1>ユーザ情報変更画面</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="well">
          <h4>ユーザ情報</h4>
          <div>
            <label>ユーザ名</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>メールアドレス</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <button type="submit">変更</button>
        </div>
      </form>
    </Layout>
  );
};
export default Edit;
