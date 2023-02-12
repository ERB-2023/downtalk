import { DataSource } from 'typeorm';
import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.MYSQL_CONTAINER_NAME,
        port: 3306,
        username: 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: 'downchat',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'MONGO_DB_PROVIDER',
    useFactory: async () => {
      const mongoDB = MongooseModule.forRoot('mongodb://localhost:27017');
    },
  },
];
