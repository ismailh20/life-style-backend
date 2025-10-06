import { Controller, Get, Query } from '@nestjs/common';
import { CheckinService } from './checkin.service';

@Controller('checkins')
export class CheckinController {
  constructor(private readonly checkinsService: CheckinService) {}

  @Get()
  async getCheckins(@Query('event_id') eventId: string) {
    return this.checkinsService.getCheckinsByEvent(Number(eventId));
  }
}
