import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import * as request from 'supertest';
import {INestApplication} from "@nestjs/common";
import {AppModule} from "./app.module";

describe('AppController', () => {

  let weatherApp: INestApplication;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    weatherApp = app.createNestApplication();
    await weatherApp.init();
  });

  describe('root', () => {

    it('/weather (GET) with city', async () => {

      //when
      const res: request.Response = await request(weatherApp.getHttpServer()).get(`/weather?city=Lod`);

      //then
      expect(res.body).toHaveProperty("clouds");
      expect(res.body).toHaveProperty("coord");
      expect(res.body).toHaveProperty("weather");

    });

    it('/forecast (GET) with city=Lod', async () => {

      //when
      const res: request.Response = await request(weatherApp.getHttpServer()).get(`/forecast?city=Lod`);

      //then
      expect(res.body).toHaveProperty("city");
      expect(res.body).toHaveProperty("list");
      expect(res.body).toHaveProperty("cod");

    });
  });
});
