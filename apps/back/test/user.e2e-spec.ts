import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET /users?searchKey&limit&offset', () => {
    it('정상 호출시, statusCode 200 전송', async () => {
      return request(app.getHttpServer())
        .get('/users?searchKey&limit=10&offset=0')
        .expect(HttpStatus.OK);
    });

    it('searchKey, limit, offset 중 하나라도 없는 경우 statusCode 400 전송', () => {
      request(app.getHttpServer())
        .get('/users?searchKey&limit=10')
        .expect(HttpStatus.BAD_REQUEST);

      request(app.getHttpServer())
        .get('/users?searchKey&offset=10')
        .expect(HttpStatus.BAD_REQUEST);

      request(app.getHttpServer())
        .get('/users?limit=10&offset=10')
        .expect(HttpStatus.BAD_REQUEST);

      return;
    });
  });
});
