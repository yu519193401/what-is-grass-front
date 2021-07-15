import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !email.trim()) {
      alert('メールアドレスを入力してください');
      return;
    }
    if (!password || !password.trim()) {
      alert('パスワードを入力してください');
      return;
    }

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="L-box">
        <div className="L-Input">
          <div className="L-Ew">
            <p>E-mail</p>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div className="L-Pw">
            <p>パスワード</p>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <input type="submit" value="ログイン" />
        </div>
      </div>
    </form>
  );
};

export default Login;
