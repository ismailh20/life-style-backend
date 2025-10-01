import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectConnection, SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { EventsModule } from './events/events/events.module';
import { GuestsModule } from './guests/guests.modul';
import { FacilitiesModule } from './facilities/facilities.modul';
import { TicketsModule } from './tickets/ticket.modul';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // biar ga perlu import ConfigModule di module lain
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadModels: true,
        synchronize: true, // hati2 di prod
      }),
    }),
    EventsModule,
    GuestsModule,
    FacilitiesModule,
    TicketsModule,
  ],
})
export class AppModule {
  constructor(@InjectConnection() private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('✅ Database connected successfully!');
    } catch (err) {
      console.error('❌ Database connection failed:', err.message);
    }
  }
}
