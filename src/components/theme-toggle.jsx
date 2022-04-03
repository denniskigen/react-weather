import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './theme-context';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      role="switch"
      className="rounded-full p-2 transition duration-500 ease-in-out"
    >
      {theme === 'dark' ? (
        <HiSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer fill-yellow-300 text-2xl"
          title="light theme"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer fill-slate-600 text-2xl"
          title="dark theme"
        />
      )}
    </div>
  );
};

export default Toggle;
