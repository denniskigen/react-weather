import {HttpModule, Module} from '@nestjs/common';
import {WeatherService} from "./weather.service";

@Module({
  imports: [HttpModule],
  providers: [WeatherService]
})
export class WeatherModule {}
