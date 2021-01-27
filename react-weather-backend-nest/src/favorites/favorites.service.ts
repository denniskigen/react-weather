import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  setLastCity(city: string) {}

  getLastCity() {
    return 'Jerusalem';
  }
}
