import React, { useState } from 'react';
import Layout from '../components/Layout';

const NewUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username || !username.trim()) {
      alert('ユーザ名を入力してください');
      return;
    }
    if (!email || !email.trim()) {
      alert('メールアドレスを入力してください');
      return;
    }
    if (!password || !password.trim()) {
      alert('パスワードを入力してください');
      return;
    }
    if (!repeatpassword || !repeatpassword.trim()) {
      alert('パスワードを入力してください');
      return;
    }
    if (repeatpassword !== password) {
      alert('パスワードが一致していません');
      return;
    }

    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatpasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <Layout title="New User">
      <h1>ユーザー登録画面</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="user-information">
          <div>
            <p>ユーザ名</p>
            <input
              className="username"
              type="text"
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <p>メールアドレス</p>
            <input className="email" type="text" onChange={handleEmailChange} />
          </div>
          <div>
            <p>パスワード</p>
            <input
              className="password"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <div>
            <p>パスワード確認</p>
            <input
              className="repeatpassword"
              type="password"
              onChange={handleRepeatpasswordChange}
            ></input>
          </div>
          <div>
            <input type="submit" value="登録" />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default NewUser;
