import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl items-center mx-auto">
        <div className="space-y-2 md:space-y-0 flex py-10 text-sm text-neutral-400 justify-center">
          <span className="">
            Crafted by{' '}
            <a
              className="text-indigo-500 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-gray-600"
              href="https://denniskigen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dennis
            </a>{' '}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
