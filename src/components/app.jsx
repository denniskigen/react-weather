import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import debounce from 'lodash-es/debounce';

import About from './about';
import Footer from './footer';
import NavBar from './navbar';
import Search from './search';
import ForecastCard from './forecast-card';
import WeatherCard from './weather-card';
import UnitsToggle from './units-toggle';

const searchTimeoutInMs = 500;

export default function App() {
  const [location, setLocation] = React.useState('Eldoret');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState('metric');

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    [],
  );

  const handleLocationChange = (event) => {
    const query = event.target.value.trim();
    if (query) {
      setIsSearching(true);
    }
    debounceSearch(query);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="dark:bg-black min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                  <Search
                    location={location}
                    isSearching={isSearching}
                    onLocationChange={handleLocationChange}
                  />
                  <div className="shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 divide-y-2 divide-light-blue-400">
                    <WeatherCard location={location} units={units} />
                    <ForecastCard location={location} units={units} />
                  </div>
                  <UnitsToggle
                    units={units}
                    onUnitsChange={handleUnitsChange}
                  />
                  <Footer />
                </div>
              </main>
            }
          />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
