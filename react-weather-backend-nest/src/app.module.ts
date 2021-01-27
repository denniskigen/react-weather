import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherModule } from './weather/weather.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [WeatherModule, FavoritesModule],
  controllers: [AppController],
})
export class AppModule {}
