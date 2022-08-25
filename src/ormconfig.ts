import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'finaldb',
  password: '123',
  database: 'finaldb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  subscribers: [],
  migrations: [],
};

export default config;
