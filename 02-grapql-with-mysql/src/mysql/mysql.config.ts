import path from 'path';

export const databaseConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'general-user',
  password: 'password',
  database: 'nest-sample',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
  entities: [path.join(__dirname, '../app/**/*.entity.{js,ts}')],
  synchronize: false,
  logging: false,
};
