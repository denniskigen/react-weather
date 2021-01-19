import {Controller, Get, Query} from '@nestjs/common';
import {WeatherService} from "./weather/weather.service";

@Controller()
export class AppController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get("/weather")
  async weather(@Query('city') city:string): Promise<any> {
    return this.weatherService.getWeather(city);
  }

  @Get("/forecast")
  async forecast(@Query('city') city:string): Promise<any> {
    return this.weatherService.getForcast(city);
  }
}
