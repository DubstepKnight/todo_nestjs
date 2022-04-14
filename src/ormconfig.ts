import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.stage.${process.env.STAGE}` });

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DB } = process.env;

const config: ConnectionOptions = {
  synchronize: false,
  type: 'postgres',
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DB,
  migrationsRun: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
