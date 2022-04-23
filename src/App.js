import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';

import './styles/App.scss';

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;