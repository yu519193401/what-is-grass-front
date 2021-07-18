import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValue = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const Login: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormValue>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<FormValue> = ({ email, password }) => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="L-box">
        <div className="L-Input">
          <div className="L-Ew">
            <p>E-mail</p>
            <input type="text" name="email" ref={register} />
            {errors.email?.message}
          </div>
          <div className="L-Pw">
            <p>パスワード</p>
            <input type="password" name="password" ref={register} />
            {errors.password?.message}
          </div>
          <input type="submit" value="ログイン" />
        </div>
      </div>
    </form>
  );
};

export default Login;
