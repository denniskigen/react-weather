import React from 'react';
import PropTypes from 'prop-types';

const UnitsToggle = ({ units, onUnitsChange }) => {
  const [isSettingsMenuOpened, setIsSettingsMenuOpened] = React.useState(false);
  const [isMetric, setIsMetric] = React.useState(
    units.match(/metric/i) ? true : false,
  );

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpened(!isSettingsMenuOpened);
  };

  const handleChange = () => {
    onUnitsChange(units.match(/metric/i) ? 'imperial' : 'metric');
    setIsMetric(!isMetric);
    toggleSettingsMenu();
  };

  return (
    <div className="m-auto mt-4 w-full md:w-3/5 lg:w-1/2">
      <button
        type="button"
        className="rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 focus:ring-offset-gray-500 dark:focus:ring-white"
        id="toggle-units"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={toggleSettingsMenu}
      >
        <span className="sr-only">Open toggle units menu</span>
        <svg
          width="30px"
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 stroke-current text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      {isSettingsMenuOpened ? (
        <div
          className="mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="toggle settings"
        >
          <ul>
            <li
              onClick={handleChange}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              role="menuitem"
            >
              Change units
              <br />
              <span className="text-xs text-indigo-500 dark:text-white">
                {isMetric ? 'Imperial' : 'Metric'}{' '}
                {isMetric ? `(F°, mph)` : `(C°, m/s)`}
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

UnitsToggle.propTypes = {
  units: PropTypes.string.isRequired,
  onUnitsChange: PropTypes.func.isRequired,
};

export default UnitsToggle;
