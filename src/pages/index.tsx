import { useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import { UserContext } from '~src/contexts/context';
import Link from 'next/link';
import QUERY_COUNTRIES from '../queries/CountriesQuery.graphql';

const App = () => {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  const [selectedCurrency] = useState('Euro');
  const { auth, authHandler } = useContext(UserContext);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div>
      <div>{auth ? <h1>Você está autenticado!</h1> : <h1>Você não está autenticado</h1>}</div>
      <div>
        <div>
          <Link href="/about">
            <a>about</a>
          </Link>
        </div>
        <div>
          <Link href="/description">
            <a>description</a>
          </Link>
        </div>
      </div>
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
      {data.Currency.map((currency) =>
        currency.name === selectedCurrency ? (
          <div>
            <h1>{currency.name}</h1>
            {currency.countries.map((c) => (
              <h4 key={c.name}>{c.name}</h4>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default App;
