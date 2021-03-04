const path = require('path');
const dotenv = require('dotenv');

const envFile = path.resolve(__dirname + '/../.env');
dotenv.config({ path: envFile });

const appConfig = {
  weatherUrl: 'https://api.openweathermap.org/data/2.5/weather',
  forecastUrl: 'https://api.openweathermap.org/data/2.5/forecast',
};

export default appConfig;
