import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //to configure the connection to the database
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'nest_auth1',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]), //to configure the user repository
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
