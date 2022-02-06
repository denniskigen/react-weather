import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-28 items-center">
      <p className="text-center">
        <span className="text-gray-600 dark:text-white">
          Open source by{' '}
          <a
            className="text-indigo-600 dark:text-gray-300 dark:hover:text-gray-600"
            href="https://denniskigen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dennis Kigen
          </a>
          <span className="ml-4">&copy;2020 - now</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
