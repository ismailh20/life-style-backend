// src/tickets/ticket-detail/ticket-detail.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TicketDetailService } from './ticket-detail.service';
import { TicketDetail } from './ticket-detail.model';

@Controller('ticket-details')
export class TicketDetailController {
  constructor(private readonly ticketDetailService: TicketDetailService) {}

  @Post()
  async create(@Body() ticketData: Partial<TicketDetail>): Promise<TicketDetail> {
    return this.ticketDetailService.create(ticketData);
  }
}
