import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrderTransaction } from './order-transaction.model';

@Injectable()
export class OrderTransactionsService {
  constructor(
    @InjectModel(OrderTransaction)
    private readonly orderTransactionModel: typeof OrderTransaction,
  ) {}

  async create(orderData: Partial<OrderTransaction>): Promise<OrderTransaction> {
    // langsung insert ke DB
    return this.orderTransactionModel.create(orderData as OrderTransaction);
  }
}
