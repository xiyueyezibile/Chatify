import React from 'react';
import ReactDOM from 'react-dom/client';
import 'uno.css';
import '@unocss/reset/normalize.css';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
