import React from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import { createToast, destroyAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';
import { ThemeProvider } from './components/theme-context';
import App from './components/app';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
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
);
