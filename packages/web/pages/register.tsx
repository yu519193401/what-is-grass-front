import Layout from '../components/Layout';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValue = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const NewUser: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit: SubmitHandler<FormValue> = ({
    username,
    email,
    password,
    repeatPassword,
  }) => {
    if (!username.trim()) {
      alert('ユーザ名を入力してください');
      return;
    }
    if (!email.trim()) {
      alert('メールアドレスを入力してください');
      return;
    }
    if (!password.trim()) {
      alert('パスワードを入力してください');
      return;
    }
    if (!repeatPassword.trim()) {
      alert('パスワードを入力してください');
      return;
    }
    if (repeatPassword !== password) {
      alert('パスワードが一致していません');
      return;
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
  };

  return (
    <Layout title="New User">
      <h1>ユーザー登録画面</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-information">
          <div>
            <p>ユーザ名</p>
            <input
              className="username"
              name="username"
              ref={register()}
              type="text"
            />
          </div>
          <div>
            <p>メールアドレス</p>
            <input
              className="email"
              name="email"
              type="text"
              ref={register()}
            />
          </div>
          <div>
            <p>パスワード</p>
            <input
              className="password"
              name="password"
              type="password"
              ref={register()}
            />
          </div>
          <br />
          <div>
            <p>パスワード確認</p>
            <input
              className="repeatpassword"
              name="repeatPassword"
              type="password"
              ref={register()}
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
