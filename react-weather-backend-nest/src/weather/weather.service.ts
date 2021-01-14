import {HttpService, Injectable} from '@nestjs/common'
import {appConfig} from '../config'

@Injectable()
export class WeatherService {

    constructor(private httpService: HttpService) {}

    async getWeather(city:string): Promise<any> {
        const url = `${appConfig.weatherUrl}?q=${city}&units=metric&APPID=${appConfig.appId}`
        const result = await this.httpService.get(url).toPromise()
        return result.data
    }

    async getForcast(city:string): Promise<any> {
        const url = `${appConfig.forecastUrl}?q=${city}&units=metric&APPID=${appConfig.appId}`
        const result = await this.httpService.get(url).toPromise()
        return result.data
    }
}
