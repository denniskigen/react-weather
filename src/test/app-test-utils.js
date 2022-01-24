import React from 'react';
import { SWRConfig } from 'swr';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../components/theme-context';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  return (
    <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
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
export { act, screen, userEvent, waitForLoadingToFinish };
export { customRender as render };
