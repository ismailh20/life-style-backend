import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TicketsService } from './ticket.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get('event')
  async getTicketsByEvent(@Query('event_id') eventId: string) {
    return this.ticketsService.findByEvent(+eventId);
  }
}
