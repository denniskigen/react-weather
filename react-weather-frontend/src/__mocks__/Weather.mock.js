export const mockCurrentWeather = {
  city: "Eldoret",
  country: "KE",
  date: 1579073776000,
  humidity: 68,
  icon_id: 801,
  temperature: 19,
  description: "few clouds",
  wind_speed: 24,
  condition: 200,
  icon: "02d",
  max: 19,
  min: 19
};

export const mockForecast = [
  {
    city: undefined,
    country: undefined,
    date: 1579122000000,
    humidity: 85,
    icon_id: 801,
    temperature: 13.76,
    description: "few clouds",
    wind_speed: 7,
    condition: undefined,
    dt_txt: "2020-01-15 21:00:00",
    icon: "02n",
    max: 13.76,
    min: 13.76
  },
  {
    city: undefined,
    country: undefined,
    date: 1579208400000,
    humidity: 77,
    icon_id: 802,
    temperature: 14.47,
    description: "scattered clouds",
    wind_speed: 6,
    condition: undefined,
    dt_txt: "2020-01-16 21:00:00",
    icon: "03n",
    max: 14.47,
    min: 14.47
  },
  {
    city: undefined,
    country: undefined,
    date: 1579294800000,
    humidity: 53,
    icon_id: 803,
    temperature: 15.34,
    description: "broken clouds",
    wind_speed: 5,
    condition: undefined,
    dt_txt: "2020-01-17 21:00:00",
    icon: "04n",
    max: 15.34,
    min: 15.34
  },
  {
    city: undefined,
    country: undefined,
    date: 1579381200000,
    humidity: 46,
    icon_id: 803,
    temperature: 15.43,
    description: "broken clouds",
    wind_speed: 4,
    condition: undefined,
    dt_txt: "2020-01-18 21:00:00",
    icon: "04n",
    max: 15.43,
    min: 15.43
  },
  {
    city: undefined,
    country: undefined,
    date: 1579467600000,
    humidity: 52,
    icon_id: 804,
    temperature: 15.02,
    description: "overcast clouds",
    wind_speed: 6,
    condition: undefined,
    dt_txt: "2020-01-19 21:00:00",
    icon: "04n",
    max: 15.02,
    min: 15.02
  }
];

export const mockWeatherData = {
  base: "stations",
  clouds: {
    all: 75
  },
  cod: 200,
  coord: {
    lon: 35.27,
    lat: 0.52
  },
  dt: 1572517487,
  id: 198629,
  main: {
    temp: 20,
    pressure: 1026,
    humidity: 49,
    temp_min: 20,
    temp_max: 20
  },
  name: "Eldoret",
  sys: {
    country: "KE",
    id: 2541,
    sunrise: 1572491974,
    sunset: 1572535523,
    type: 1
  },
  timezone: 10800,
  visibility: 10000,
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
    }
  ],
  wind: {
    deg: 130,
    speed: 8.2
  }
};

export const mockForecastData = {
  city: {
    coord: {
      lat: 0.5198,
      lon: 35.2715
    },
    country: "KE",
    id: 198629,
    name: "Eldoret",
    population: 218446,
    sunrise: 1572578373,
    sunset: 1572621920,
    timezone: 10800
  },
  cod: "200",
  message: 0.0064,
  cnt: 40,
  list: [
    {
      dt: 1572609600,
      main: {
        temp: 24.58,
        temp_min: 22.25,
        temp_max: 24.58,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 792,
        humidity: 51,
        temp_kf: 2.33
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 2.47,
        deg: 59
      },
      rain: {
        "3h": 1.06
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-01 12:00:00"
    },
    {
      dt: 1572620400,
      main: {
        temp: 20.07,
        temp_min: 18.32,
        temp_max: 20.07,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 792,
        humidity: 67,
        temp_kf: 1.75
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.95,
        deg: 52
      },
      rain: {
        "3h": 0.94
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-01 15:00:00"
    },
    {
      dt: 1572631200,
      main: {
        temp: 16.81,
        temp_min: 15.65,
        temp_max: 16.81,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 794,
        humidity: 82,
        temp_kf: 1.16
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 1.67,
        deg: 141
      },
      rain: {
        "3h": 0.37
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-01 18:00:00"
    },
    {
      dt: 1572642000,
      main: {
        temp: 15.34,
        temp_min: 14.76,
        temp_max: 15.34,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 87,
        temp_kf: 0.58
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 93
      },
      wind: {
        speed: 0.5,
        deg: 139
      },
      rain: {
        "3h": 0.94
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-01 21:00:00"
    },
    {
      dt: 1572652800,
      main: {
        temp: 13.64,
        temp_min: 13.64,
        temp_max: 13.64,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 793,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 78
      },
      wind: {
        speed: 0.62,
        deg: 173
      },
      rain: {
        "3h": 0.12
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-02 00:00:00"
    },
    {
      dt: 1572663600,
      main: {
        temp: 12.53,
        temp_min: 12.53,
        temp_max: 12.53,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 793,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.12,
        deg: 115
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-02 03:00:00"
    },
    {
      dt: 1572674400,
      main: {
        temp: 18.33,
        temp_min: 18.33,
        temp_max: 18.33,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 795,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.33,
        deg: 78
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-02 06:00:00"
    },
    {
      dt: 1572685200,
      main: {
        temp: 22.38,
        temp_min: 22.38,
        temp_max: 22.38,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 794,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.2,
        deg: 64
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-02 09:00:00"
    },
    {
      dt: 1572696000,
      main: {
        temp: 22.26,
        temp_min: 22.26,
        temp_max: 22.26,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 792,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 15
      },
      wind: {
        speed: 2.29,
        deg: 58
      },
      rain: {
        "3h": 0.94
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-02 12:00:00"
    },
    {
      dt: 1572706800,
      main: {
        temp: 18.77,
        temp_min: 18.77,
        temp_max: 18.77,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 792,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 69
      },
      wind: {
        speed: 2.93,
        deg: 42
      },
      rain: {
        "3h": 1
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-02 15:00:00"
    },
    {
      dt: 1572717600,
      main: {
        temp: 15.72,
        temp_min: 15.72,
        temp_max: 15.72,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 80
      },
      wind: {
        speed: 1.92,
        deg: 72
      },
      rain: {
        "3h": 0.94
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-02 18:00:00"
    },
    {
      dt: 1572728400,
      main: {
        temp: 14.35,
        temp_min: 14.35,
        temp_max: 14.35,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.96,
        deg: 128
      },
      rain: {
        "3h": 1.69
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-02 21:00:00"
    },
    {
      dt: 1572739200,
      main: {
        temp: 13.41,
        temp_min: 13.41,
        temp_max: 13.41,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 793,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 84
      },
      wind: {
        speed: 1.44,
        deg: 117
      },
      rain: {
        "3h": 1.44
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-03 00:00:00"
    },
    {
      dt: 1572750000,
      main: {
        temp: 12.71,
        temp_min: 12.71,
        temp_max: 12.71,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 42
      },
      wind: {
        speed: 0.99,
        deg: 113
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-03 03:00:00"
    },
    {
      dt: 1572760800,
      main: {
        temp: 17.43,
        temp_min: 17.43,
        temp_max: 17.43,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 796,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 24
      },
      wind: {
        speed: 3.57,
        deg: 84
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-03 06:00:00"
    },
    {
      dt: 1572771600,
      main: {
        temp: 22.05,
        temp_min: 22.05,
        temp_max: 22.05,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 794,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.82,
        deg: 67
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-03 09:00:00"
    },
    {
      dt: 1572782400,
      main: {
        temp: 23.11,
        temp_min: 23.11,
        temp_max: 23.11,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 792,
        humidity: 40,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 22
      },
      wind: {
        speed: 3.46,
        deg: 63
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-03 12:00:00"
    },
    {
      dt: 1572793200,
      main: {
        temp: 18.65,
        temp_min: 18.65,
        temp_max: 18.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 793,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.02,
        deg: 80
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-03 15:00:00"
    },
    {
      dt: 1572804000,
      main: {
        temp: 16.54,
        temp_min: 16.54,
        temp_max: 16.54,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 795,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 2.05,
        deg: 70
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-03 18:00:00"
    },
    {
      dt: 1572814800,
      main: {
        temp: 14.19,
        temp_min: 14.19,
        temp_max: 14.19,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 795,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 84
      },
      wind: {
        speed: 1.4,
        deg: 56
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-03 21:00:00"
    },
    {
      dt: 1572825600,
      main: {
        temp: 12.84,
        temp_min: 12.84,
        temp_max: 12.84,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 52
      },
      wind: {
        speed: 1.36,
        deg: 94
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-04 00:00:00"
    },
    {
      dt: 1572836400,
      main: {
        temp: 12.33,
        temp_min: 12.33,
        temp_max: 12.33,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 795,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 4
      },
      wind: {
        speed: 1.84,
        deg: 90
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-04 03:00:00"
    },
    {
      dt: 1572847200,
      main: {
        temp: 18.47,
        temp_min: 18.47,
        temp_max: 18.47,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 797,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 3.55,
        deg: 81
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-04 06:00:00"
    },
    {
      dt: 1572858000,
      main: {
        temp: 22.19,
        temp_min: 22.19,
        temp_max: 22.19,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 795,
        humidity: 47,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 3.7,
        deg: 66
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-04 09:00:00"
    },
    {
      dt: 1572868800,
      main: {
        temp: 22.93,
        temp_min: 22.93,
        temp_max: 22.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 793,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 34
      },
      wind: {
        speed: 3.1,
        deg: 68
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-04 12:00:00"
    },
    {
      dt: 1572879600,
      main: {
        temp: 18.99,
        temp_min: 18.99,
        temp_max: 18.99,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 793,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 1.58,
        deg: 67
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-04 15:00:00"
    },
    {
      dt: 1572890400,
      main: {
        temp: 16.9,
        temp_min: 16.9,
        temp_max: 16.9,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 795,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 37
      },
      wind: {
        speed: 1.27,
        deg: 83
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-04 18:00:00"
    },
    {
      dt: 1572901200,
      main: {
        temp: 14.73,
        temp_min: 14.73,
        temp_max: 14.73,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 74
      },
      wind: {
        speed: 1.63,
        deg: 84
      },
      rain: {
        "3h": 0.13
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-04 21:00:00"
    },
    {
      dt: 1572912000,
      main: {
        temp: 13.03,
        temp_min: 13.03,
        temp_max: 13.03,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 793,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 39
      },
      wind: {
        speed: 0.8,
        deg: 99
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-05 00:00:00"
    },
    {
      dt: 1572922800,
      main: {
        temp: 12.41,
        temp_min: 12.41,
        temp_max: 12.41,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 794,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.96,
        deg: 101
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-05 03:00:00"
    },
    {
      dt: 1572933600,
      main: {
        temp: 17.96,
        temp_min: 17.96,
        temp_max: 17.96,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 796,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.11,
        deg: 81
      },
      rain: {
        "3h": 0.13
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-05 06:00:00"
    },
    {
      dt: 1572944400,
      main: {
        temp: 19.98,
        temp_min: 19.98,
        temp_max: 19.98,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 794,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 21
      },
      wind: {
        speed: 3.08,
        deg: 72
      },
      rain: {
        "3h": 0.81
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-05 09:00:00"
    },
    {
      dt: 1572955200,
      main: {
        temp: 21.15,
        temp_min: 21.15,
        temp_max: 21.15,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 793,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 35
      },
      wind: {
        speed: 1.72,
        deg: 80
      },
      rain: {
        "3h": 1.94
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-05 12:00:00"
    },
    {
      dt: 1572966000,
      main: {
        temp: 17.82,
        temp_min: 17.82,
        temp_max: 17.82,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 793,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.55,
        deg: 205
      },
      rain: {
        "3h": 1.94
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-05 15:00:00"
    },
    {
      dt: 1572976800,
      main: {
        temp: 16.09,
        temp_min: 16.09,
        temp_max: 16.09,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 41
      },
      wind: {
        speed: 0.68,
        deg: 203
      },
      rain: {
        "3h": 0.44
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-05 18:00:00"
    },
    {
      dt: 1572987600,
      main: {
        temp: 14.27,
        temp_min: 14.27,
        temp_max: 14.27,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 794,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 47
      },
      wind: {
        speed: 0.43,
        deg: 75
      },
      rain: {
        "3h": 0.13
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-05 21:00:00"
    },
    {
      dt: 1572998400,
      main: {
        temp: 13.03,
        temp_min: 13.03,
        temp_max: 13.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 792,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 44
      },
      wind: {
        speed: 0.78,
        deg: 122
      },
      rain: {
        "3h": 0.19
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-06 00:00:00"
    },
    {
      dt: 1573009200,
      main: {
        temp: 12.66,
        temp_min: 12.66,
        temp_max: 12.66,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 794,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 1.39,
        deg: 105
      },
      rain: {
        "3h": 0.44
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-11-06 03:00:00"
    },
    {
      dt: 1573020000,
      main: {
        temp: 17.38,
        temp_min: 17.38,
        temp_max: 17.38,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 795,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.2,
        deg: 86
      },
      rain: {
        "3h": 0.12
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-06 06:00:00"
    },
    {
      dt: 1573030800,
      main: {
        temp: 21.36,
        temp_min: 21.36,
        temp_max: 21.36,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 794,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.46,
        deg: 70
      },
      rain: {
        "3h": 0.13
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-11-06 09:00:00"
    }
  ]
};

export const mockSearchWeatherData = {
  base: "stations",
  clouds: {
    all: 20
  },
  cod: 200,
  coord: {
    lon: 13.41,
    lat: 52.52
  },
  dt: 1588244935,
  id: 2950159,
  main: {
    temp: 17.08,
    feels_like: 14.51,
    temp_min: 16,
    temp_max: 18.33,
    pressure: 1003,
    humidity: 67
  },
  name: "Berlin",
  sys: {
    type: 1,
    id: 1275,
    country: "DE",
    sunrise: 1588217769,
    sunset: 1588271443
  },
  timezone: 7200,
  visibility: 10000,
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d"
    }
  ],
  wind: {
    speed: 4.1,
    deg: 200
  }
};

export const mockSearchForecastData = {
  city: {
    id: 2950159,
    name: "Berlin",
    coord: {
      lat: 52.5244,
      lon: 13.4105
    },
    country: "DE",
    population: 1000000,
    timezone: 7200,
    sunrise: 1588217768,
    sunset: 1588271444
  },
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1588248000,
      main: {
        temp: 16.16,
        feels_like: 13.17,
        temp_min: 15.19,
        temp_max: 16.16,
        pressure: 1003,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 67,
        temp_kf: 0.97
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 59
      },
      wind: {
        speed: 4.34,
        deg: 200
      },
      rain: {
        "3h": 0.65
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-04-30 12:00:00"
    },
    {
      dt: 1588258800,
      main: {
        temp: 17.06,
        feels_like: 12.98,
        temp_min: 17.05,
        temp_max: 17.06,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 60,
        temp_kf: 0.01
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 83
      },
      wind: {
        speed: 5.6,
        deg: 222
      },
      rain: {
        "3h": 0.62
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-04-30 15:00:00"
    },
    {
      dt: 1588269600,
      main: {
        temp: 14.94,
        feels_like: 12.63,
        temp_min: 14.79,
        temp_max: 14.94,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 68,
        temp_kf: 0.15
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 3.02,
        deg: 231
      },
      rain: {
        "3h": 0.13
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-04-30 18:00:00"
    },
    {
      dt: 1588280400,
      main: {
        temp: 12.48,
        feels_like: 10.67,
        temp_min: 12.44,
        temp_max: 12.48,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 79,
        temp_kf: 0.04
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 2.25,
        deg: 175
      },
      rain: {
        "3h": 0.34
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-04-30 21:00:00"
    },
    {
      dt: 1588291200,
      main: {
        temp: 12.73,
        feels_like: 8.99,
        temp_min: 12.73,
        temp_max: 12.73,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.62,
        deg: 208
      },
      rain: {
        "3h": 0.26
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-01 00:00:00"
    },
    {
      dt: 1588302000,
      main: {
        temp: 10.58,
        feels_like: 6.51,
        temp_min: 10.58,
        temp_max: 10.58,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.55,
        deg: 216
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-01 03:00:00"
    },
    {
      dt: 1588312800,
      main: {
        temp: 10.98,
        feels_like: 6.35,
        temp_min: 10.98,
        temp_max: 10.98,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.34,
        deg: 225
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-01 06:00:00"
    },
    {
      dt: 1588323600,
      main: {
        temp: 14.55,
        feels_like: 9.98,
        temp_min: 14.55,
        temp_max: 14.55,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 998,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 69
      },
      wind: {
        speed: 4.64,
        deg: 236
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-01 09:00:00"
    },
    {
      dt: 1588334400,
      main: {
        temp: 16.66,
        feels_like: 11.57,
        temp_min: 16.66,
        temp_max: 16.66,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 51
      },
      wind: {
        speed: 5.3,
        deg: 232
      },
      rain: {
        "3h": 0.6
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-01 12:00:00"
    },
    {
      dt: 1588345200,
      main: {
        temp: 17.15,
        feels_like: 11.92,
        temp_min: 17.15,
        temp_max: 17.15,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 996,
        humidity: 40,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 48
      },
      wind: {
        speed: 5.44,
        deg: 226
      },
      rain: {
        "3h": 0.19
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-01 15:00:00"
    },
    {
      dt: 1588356000,
      main: {
        temp: 14.02,
        feels_like: 9.78,
        temp_min: 14.02,
        temp_max: 14.02,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 997,
        humidity: 55,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 73
      },
      wind: {
        speed: 4.49,
        deg: 226
      },
      rain: {
        "3h": 0.37
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-01 18:00:00"
    },
    {
      dt: 1588366800,
      main: {
        temp: 11.6,
        feels_like: 7.94,
        temp_min: 11.6,
        temp_max: 11.6,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 997,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 62
      },
      wind: {
        speed: 3.69,
        deg: 220
      },
      rain: {
        "3h": 0.15
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-01 21:00:00"
    },
    {
      dt: 1588377600,
      main: {
        temp: 9.86,
        feels_like: 6.02,
        temp_min: 9.86,
        temp_max: 9.86,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 34
      },
      wind: {
        speed: 4.06,
        deg: 233
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-02 00:00:00"
    },
    {
      dt: 1588388400,
      main: {
        temp: 8.95,
        feels_like: 5.1,
        temp_min: 8.95,
        temp_max: 8.95,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 46
      },
      wind: {
        speed: 3.98,
        deg: 232
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-02 03:00:00"
    },
    {
      dt: 1588399200,
      main: {
        temp: 10.48,
        feels_like: 6.79,
        temp_min: 10.48,
        temp_max: 10.48,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1000,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 3.91,
        deg: 237
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-02 06:00:00"
    },
    {
      dt: 1588410000,
      main: {
        temp: 14.08,
        feels_like: 9.57,
        temp_min: 14.08,
        temp_max: 14.08,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1000,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 9
      },
      wind: {
        speed: 5.12,
        deg: 245
      },
      rain: {
        "3h": 1.05
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-02 09:00:00"
    },
    {
      dt: 1588420800,
      main: {
        temp: 14.98,
        feels_like: 10.24,
        temp_min: 14.98,
        temp_max: 14.98,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1000,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 45
      },
      wind: {
        speed: 5.62,
        deg: 267
      },
      rain: {
        "3h": 2.31
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-02 12:00:00"
    },
    {
      dt: 1588431600,
      main: {
        temp: 14.75,
        feels_like: 10.12,
        temp_min: 14.75,
        temp_max: 14.75,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 96
      },
      wind: {
        speed: 5.09,
        deg: 260
      },
      rain: {
        "3h": 1.26
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-02 15:00:00"
    },
    {
      dt: 1588442400,
      main: {
        temp: 12.37,
        feels_like: 8.24,
        temp_min: 12.37,
        temp_max: 12.37,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1000,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 4.38,
        deg: 260
      },
      rain: {
        "3h": 0.82
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-02 18:00:00"
    },
    {
      dt: 1588453200,
      main: {
        temp: 9.98,
        feels_like: 6.26,
        temp_min: 9.98,
        temp_max: 9.98,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.05,
        deg: 274
      },
      rain: {
        "3h": 0.17
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-02 21:00:00"
    },
    {
      dt: 1588464000,
      main: {
        temp: 8.86,
        feels_like: 4.71,
        temp_min: 8.86,
        temp_max: 8.86,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.6,
        deg: 286
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-03 00:00:00"
    },
    {
      dt: 1588474800,
      main: {
        temp: 7.3,
        feels_like: 2.81,
        temp_min: 7.3,
        temp_max: 7.3,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 63
      },
      wind: {
        speed: 4.89,
        deg: 283
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-03 03:00:00"
    },
    {
      dt: 1588485600,
      main: {
        temp: 8.04,
        feels_like: 3.02,
        temp_min: 8.04,
        temp_max: 8.04,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1008,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 82
      },
      wind: {
        speed: 5.66,
        deg: 289
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-03 06:00:00"
    },
    {
      dt: 1588496400,
      main: {
        temp: 9.59,
        feels_like: 4.9,
        temp_min: 9.59,
        temp_max: 9.59,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1010,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.14,
        deg: 277
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-03 09:00:00"
    },
    {
      dt: 1588507200,
      main: {
        temp: 13.31,
        feels_like: 8.93,
        temp_min: 13.31,
        temp_max: 13.31,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1011,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 4.43,
        deg: 277
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-03 12:00:00"
    },
    {
      dt: 1588518000,
      main: {
        temp: 14.56,
        feels_like: 9.96,
        temp_min: 14.56,
        temp_max: 14.56,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1011,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 66
      },
      wind: {
        speed: 4.75,
        deg: 270
      },
      rain: {
        "3h": 0.14
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-03 15:00:00"
    },
    {
      dt: 1588528800,
      main: {
        temp: 12.31,
        feels_like: 8.89,
        temp_min: 12.31,
        temp_max: 12.31,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1012,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 37
      },
      wind: {
        speed: 3.68,
        deg: 268
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-03 18:00:00"
    },
    {
      dt: 1588539600,
      main: {
        temp: 9.55,
        feels_like: 6.67,
        temp_min: 9.55,
        temp_max: 9.55,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1014,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 3.11,
        deg: 303
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-03 21:00:00"
    },
    {
      dt: 1588550400,
      main: {
        temp: 8.23,
        feels_like: 5.43,
        temp_min: 8.23,
        temp_max: 8.23,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1015,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 9
      },
      wind: {
        speed: 2.23,
        deg: 314
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-04 00:00:00"
    },
    {
      dt: 1588561200,
      main: {
        temp: 6.71,
        feels_like: 4.11,
        temp_min: 6.71,
        temp_max: 6.71,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1015,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 1.89,
        deg: 294
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-04 03:00:00"
    },
    {
      dt: 1588572000,
      main: {
        temp: 8.46,
        feels_like: 5.47,
        temp_min: 8.46,
        temp_max: 8.46,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1016,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 2.15,
        deg: 295
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-04 06:00:00"
    },
    {
      dt: 1588582800,
      main: {
        temp: 13.15,
        feels_like: 9.54,
        temp_min: 13.15,
        temp_max: 13.15,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1016,
        humidity: 39,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 81
      },
      wind: {
        speed: 2.22,
        deg: 293
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-04 09:00:00"
    },
    {
      dt: 1588593600,
      main: {
        temp: 16.2,
        feels_like: 12.74,
        temp_min: 16.2,
        temp_max: 16.2,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1015,
        humidity: 31,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 85
      },
      wind: {
        speed: 1.92,
        deg: 288
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-04 12:00:00"
    },
    {
      dt: 1588604400,
      main: {
        temp: 16.41,
        feels_like: 12.63,
        temp_min: 16.41,
        temp_max: 16.41,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1014,
        humidity: 31,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.41,
        deg: 306
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-04 15:00:00"
    },
    {
      dt: 1588615200,
      main: {
        temp: 13.74,
        feels_like: 10.05,
        temp_min: 13.74,
        temp_max: 13.74,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1014,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 2.66,
        deg: 336
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-04 18:00:00"
    },
    {
      dt: 1588626000,
      main: {
        temp: 10.68,
        feels_like: 6.86,
        temp_min: 10.68,
        temp_max: 10.68,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1015,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 86
      },
      wind: {
        speed: 3.25,
        deg: 33
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-04 21:00:00"
    },
    {
      dt: 1588636800,
      main: {
        temp: 8.55,
        feels_like: 4.79,
        temp_min: 8.55,
        temp_max: 8.55,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1016,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 86
      },
      wind: {
        speed: 3.07,
        deg: 54
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-05 00:00:00"
    },
    {
      dt: 1588647600,
      main: {
        temp: 6.96,
        feels_like: 3.33,
        temp_min: 6.96,
        temp_max: 6.96,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1016,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 10
      },
      wind: {
        speed: 2.67,
        deg: 42
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2020-05-05 03:00:00"
    },
    {
      dt: 1588658400,
      main: {
        temp: 9.07,
        feels_like: 6.05,
        temp_min: 9.07,
        temp_max: 9.07,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1016,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 5
      },
      wind: {
        speed: 1.81,
        deg: 26
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-05 06:00:00"
    },
    {
      dt: 1588669200,
      main: {
        temp: 13.73,
        feels_like: 10.13,
        temp_min: 13.73,
        temp_max: 13.73,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1017,
        humidity: 38,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.23,
        deg: 25
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2020-05-05 09:00:00"
    }
  ]
};
