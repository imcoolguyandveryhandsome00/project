import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from './entitices/user';
import PurchaseOrder from './entitices/purcaseorder';
import Pet from './entitices/pet';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        let option: TypeOrmModuleOptions = {
          type: "sqlite",
          database: configService.get<string>("DATABASE_NAME", 'database.db'),
          entities: [User, Pet, PurchaseOrder],
          synchronize: true,
        }
        return option;
      },
      inject: [ConfigService]
    }),

    TypeOrmModule.forFeature([Pet, User, PurchaseOrder])
  ],

  controllers: [AppController, PetController],
  providers: [AppService, PetService],
})
export class AppModule { }
