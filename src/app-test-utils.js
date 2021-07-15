import React from 'react';
import { SWRConfig } from 'swr';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from './components/theme-context';

const Wrapper = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
      }}
    >
      <ThemeProvider initialTheme="light">{children}</ThemeProvider>
    </SWRConfig>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole(/progressbar/i)], {
    timeout: 4000,
  });

export * from '@testing-library/react';
export {
  act,
  screen,
  userEvent,
  createMemoryHistory,
  waitForLoadingToFinish,
  Router,
};
export { customRender as render };
