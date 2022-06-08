import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl items-center mx-auto">
        <div className="mt-12 space-y-2 md:space-y-0 flex flex-col justify-between border-t border-neutral-100 dark:border-neutral-800 pt-6 pb-12 text-sm md:flex-row md:text-lg text-neutral-400">
          <span className="">
            Open source by{' '}
            <a
              className="text-indigo-500 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-gray-600"
              href="https://denniskigen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dennis Kigen
            </a>{' '}
            &copy; {new Date().getFullYear()}
          </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
