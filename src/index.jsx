import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { SWRConfig } from 'swr';
import { createToast, destroyAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';
import { ThemeProvider } from './components/theme-context';

ReactDOM.render(
  <SWRConfig
    value={{
      onError: (error) => {
        if (error) {
          createToast(`Error: ${error.message}`, {
            type: 'error',
          });
        }
      },
      onSuccess: (data) => {
        if (data) {
          destroyAllToasts();
        }
      },
      shouldRetryOnError: false,
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SWRConfig>,
  document.getElementById('root'),
);
