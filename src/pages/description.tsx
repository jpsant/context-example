import { useContext } from 'react';
import { UserContext } from '~src/contexts/context';
import Link from 'next/link';

const Description = () => {
  const { auth, authHandler } = useContext(UserContext);

  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <h1>Description page</h1>
      <h2>{auth ? 'Você está autenticado!' : 'Você não está autenticado!'}</h2>
      {auth ? (
        <button
          onClick={() => {
            //Call Logout method
            authHandler(!auth);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            //Call Login method
            authHandler(!auth);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Description;
