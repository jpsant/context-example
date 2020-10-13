import { useContext } from 'react';
import { UserContext } from '~src/contexts/context';
import Link from 'next/link';

const About = () => {
  const { auth, authHandler } = useContext(UserContext);
  return (
    <div>
      <h1>About page</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/description">
          <a>Description</a>
        </Link>
      </div>
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

export default About;
