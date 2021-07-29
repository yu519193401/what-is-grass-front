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
      <div className="m-0 p-0 font-sans:sans-serif">
        <div className="absolute top-1/4 left-2/3 w-80 h-96 p-40 bg-yellow-500 bg-opacity-75 box-border shadow-sm rounded-tl-lg rounded-br-lg">
          <h2 className="p-0 text-green-100 text-3xl text-center"> ログイン</h2>
          <div className="relative">
            <p className="text-green-100">E-mail</p>
            <input
              type="text"
              className="relative outline-none border border-gray-400 rounded py-1 px-2  bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-green-400 focus:ring-1"
              ref={register}
            />
            {errors.email?.message}
          </div>
          <div className="L-Pw">
            <p className="text-green-100">パスワード</p>
            <input
              type="password"
              className="relative outline-none border border-gray-400 rounded py-1 px-2  bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-green-400 focus:ring-1"
              ref={register}
              maxLength={16}
            />
            {errors.password?.message}
          </div>
          <button
            className="transition duration-300 ease-in-out m-3 py-2 px-4 bg-green-500 rounded text-white font-normal focus:outline-none focus:ring hover:bg-green-600 active:bg-green-800"
            type="submit"
          >
            ログイン
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
