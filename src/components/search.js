import React from 'react';

const Search = props => {
  const { error, isSearching, onLocationChange } = props;

  return (
    <div className="w-4/5 md:w-3/5 lg:w-1/2 m-auto">
      {error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 mb-4 px-4 py-3 rounded-md relative"
          role="alert"
        >
          <span className="block sm:inline">{error.message}</span>
        </div>
      ) : null}
      <div className="flex flex-row mx-2 p-2 justify-start border-b border-green-300">
        <svg
          width="24"
          height="24"
          fill="none"
          className="mr-2 group-hover:text-gray-500 text-green-600 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <input
          type="search"
          role="search"
          onChange={onLocationChange}
          placeholder="Search for a location"
          className="w-48 md:w-96 mr-8 outline-none placeholder-gray-500"
        />
        {isSearching ? (
          <svg
            className="animate-spin mt-1 -ml-1 h-5 w-5 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Search for a location</title>
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
