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
