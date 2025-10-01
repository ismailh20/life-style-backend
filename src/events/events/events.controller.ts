// src/events/events.controller.ts
import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.model';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEvent(
    @Query('event_id') eventId: string,
    @Query('merchant_id') merchantId: string,
  ): Promise<Event | { message: string }> {
    const event = await this.eventsService.findOneByIdAndMerchant(
      +eventId,
      +merchantId,
    );
    console.log(event);

    if (!event) {
      return { message: 'Event not found' };
    }

    return event;
  }
}
