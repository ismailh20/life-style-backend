import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectConnection, SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { EventsModule } from './events/events/events.module';
import { GuestsModule } from './guests/guests.modul';
import { FacilitiesModule } from './facilities/facilities.modul';
import { TicketsModule } from './tickets/ticket.modul';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '159.65.0.183',
      port: 5432,
      username: 'lifestyle',
      password: 'ismailganteng',
      database: 'lifestyle_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    EventsModule,
    GuestsModule,
    FacilitiesModule,
    TicketsModule
  ]
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
