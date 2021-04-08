import React from 'react';

const About = () => {
  return (
    <>
      <section
        className="shadow-lg rounded-lg max-w-3xl pt-2 mt-12 mx-auto h-auto mb-64"
        style={{ backgroundPositionY: '100%' }}
      >
        <div className="p-4 text-gray-500">
          <h3 className="text-gray-600 text-xl font-medium font-sans">
            About ReactWeather
          </h3>
          <p className="pt-4">
            ReactWeather is a beautiful weather app built on top of the{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://openweathermap.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
            .
          </p>
          <p className="pt-4">
            It is a labor of ❤️ open-source project by me,{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://github.com/denniskigen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dennis Kigen
            </a>
            , a software developer, writer and maker of cool stuff.
          </p>
          <p className="pt-4">
            It's runs on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            . It uses{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://erikflowers.github.io/weather-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Erik Flowers' weather icons
            </a>{' '}
            and is hosted on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://react-weather.denniskigen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            . If you like the project, please fork it on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/denniskigen/react-weather"
            >
              GitHub
            </a>{' '}
            and leave a star!
          </p>
          <p className="pt-4">
            Thanks for swinging by. Enjoy the rest of your day!
          </p>
        </div>
      </section>
      <div className="flex justify-center">
        <a
          href="https://www.buymeacoffee.com/denniskigen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="h-16 w-56 shadow rounded-lg"
          />
        </a>
      </div>
    </>
  );
};

export default About;
