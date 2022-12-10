import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import debounce from 'lodash-es/debounce';

import About from './about';
import Layout from './layout';
import Search from './search';
import ForecastCard from './forecast-card';
import WeatherCard from './weather-card';
import UnitsToggle from './units-toggle';

const searchTimeoutInMs = 500;

export default function App() {
  const [location, setLocation] = React.useState('Eldoret');
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState('metric');

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setLocation(searchTerm);
      }, searchTimeoutInMs),
    [],
  );

  const handleLocationChange = (location) => {
    setIsSearching(true);
    if (location) {
      debounceSearch(location);
    }
    setIsSearching(false);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  return (
    <div className="min-h-screen dark:bg-black">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <main>
                  <div className="mx-auto w-5/6 md:w-full xl:max-w-6xl 2xl:max-w-7xl">
                    <Search
                      location={location}
                      isSearching={isSearching}
                      onLocationChange={
                        (event) => handleLocationChange(event.target.value)
                        // setDebouncedSearchTerm(event.target.value)
                      }
                    />
                    <div className="divide-light-blue-400 m-auto mt-4 h-auto w-full divide-y-2 overflow-hidden rounded-lg shadow-lg md:w-3/5 lg:w-1/2">
                      <WeatherCard location={location} units={units} />
                      <ForecastCard location={location} units={units} />
                    </div>
                    <UnitsToggle
                      units={units}
                      onUnitsChange={handleUnitsChange}
                    />
                  </div>
                </main>
              </Layout>
            }
          />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
