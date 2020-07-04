import React from 'react';
import { ToastContainer } from 'react-toastify';

import Payment from './pages/Payment';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Payment />
      <GlobalStyles />
      <ToastContainer autoClose={3500} />
    </>
  );
};

export default App;
