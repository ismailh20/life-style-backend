import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrderTransactionsService } from './order-transactions.service';
import { OrderTransaction } from './order-transaction.model';

@Controller('order-transactions')
export class OrderTransactionsController {
  constructor(private readonly orderTransactionsService: OrderTransactionsService) {}

  @Post()
  async create(@Body() body: Partial<OrderTransaction>) {
    return this.orderTransactionsService.create(body);
  }
}
