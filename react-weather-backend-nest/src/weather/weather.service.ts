import {HttpService, Injectable} from '@nestjs/common'
import {appConfig} from '../config'
import {secrets} from "../secrets";

@Injectable()
export class WeatherService {

    constructor(private httpService: HttpService) {}

    async getWeather(city:string): Promise<any> {
        const url = `${appConfig.weatherUrl}?q=${city}&units=metric&APPID=${secrets.appId}`
        const result = await this.httpService.get(url).toPromise()
        return result.data
    }

    async getForcast(city:string): Promise<any> {
        const url = `${appConfig.forecastUrl}?q=${city}&units=metric&APPID=${secrets.appId}`
        const result = await this.httpService.get(url).toPromise()
        return result.data
    }
}
