import React from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig, preload } from 'swr';
import { createToast, destroyAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';
import { ThemeProvider } from './components/theme-context';
import fetcher from './lib/fetcher';
import App from './components/app';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;
const apiEndpoint = `?q=Eldoret&units=metric&APPID=${apiKey}`;

preload(`${apiUrl}/weather/${apiEndpoint}`, fetcher);
preload(`${apiUrl}/forecast/${apiEndpoint}`, fetcher);

console.log('preloading');

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
