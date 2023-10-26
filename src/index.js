import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
