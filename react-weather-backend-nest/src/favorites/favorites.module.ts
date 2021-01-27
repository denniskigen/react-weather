import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Module({
  providers: [FavoritesService],
})
export class FavoritesModule {}
