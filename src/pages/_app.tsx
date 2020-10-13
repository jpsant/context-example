import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import '~src/i18n';
import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import { UserContext } from '../contexts/context';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [auth, authHandler] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>Apollo</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <UserContext.Provider value={{ auth, authHandler }}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default MyApp;
