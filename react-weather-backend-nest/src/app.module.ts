import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [WeatherModule],
  controllers: [AppController],
})
export class AppModule {}
