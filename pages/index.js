import React from 'react';
import Head from 'next/head';

import { withReduxSaga } from 'root/store';
import { Feature } from 'features/Feature';
import stylesheet from '../styles/index.css';

const App = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Boilerplate</title>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Feature />
  </div>
);

export default withReduxSaga(App);
