import { TypeOrmModuleOptions } from "@nestjs/typeorm";


function ormConfig(): TypeOrmModuleOptions {
    const commonConf = {
      SYNCRONIZE: false,
      ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
      MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
      CLI: {
          migrationsDir: 'src/migrations',
      },
      MIGRATIONS_RUN: false,
    };

    const ormconfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: process.env.DB_URL,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: commonConf.ENTITIES,
        synchronize: commonConf.SYNCRONIZE,
        logging: true,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    }

    return ormconfig;
}

export { ormConfig }