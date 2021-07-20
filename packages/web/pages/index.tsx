import Link from 'next/link';
import Layout from '../components/Layout';
import { greet } from '@what-is-grass/shared';
import { useState, useEffect } from 'react';
import Login from '../components/Login';

const IndexPage: React.FC = () => {
  const [user, setUser] = useState('World');

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch('/user');
      const data = await res.json();
      setUser(data.username);
    };

    callApi();
  }, []);

  return (
    <Layout title="Home">
      <h1 className="text-xl border-black border-2">{greet(user)}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <br />
      <Login />
    </Layout>
  );
};

export default IndexPage;
