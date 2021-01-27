import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(async () => {
    service = new FavoritesService();
  });

  it('should return last city', () => {
    const city = 'Jerusalem';
    service.setLastCity(city);
    expect(service.getLastCity()).toEqual(city);
  });
});
