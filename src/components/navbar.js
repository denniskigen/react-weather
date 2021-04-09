import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="mb-4">
      <div className="bg-gradient-to-r from-blue-100 via-green-200 to-indigo-400 w-auto h-6"></div>
      <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 hover:text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleButton}
            >
              <span className="sr-only">
                {isMenuOpened ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMenuOpened ? (
                <svg
                  className="block bg-green-200 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block bg-green-200 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:contents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 bg-green-200 stroke-current text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">reactWeather</h3>
            </Link>
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    About
                  </Link>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/denniskigen/react-weather"
                    className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                  >
                    <span className="sr-only">React Weather on GitHub</span>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpened ? (
        <div
          className="md:hidden max-w-2xl mx-auto px-2 sm:px-6 lg:px-2"
          id="mobile-menu"
        >
          <div className="flex flex-col sm:px-2 sm:pt-2 sm:pb-3 space-y-1 md:w-1/2">
            <Link
              to="/"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleButton}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleButton}
            >
              About
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/denniskigen/react-weather"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
