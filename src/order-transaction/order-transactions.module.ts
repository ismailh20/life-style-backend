import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderTransaction } from './order-transaction.model';
import { OrderTransactionsService } from './order-transactions.service';
import { OrderTransactionsController } from './order-transactions.controller';

@Module({
  imports: [SequelizeModule.forFeature([OrderTransaction])],
  providers: [OrderTransactionsService],
  controllers: [OrderTransactionsController],
})
export class OrderTransactionsModule {}
