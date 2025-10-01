// guests.controller.ts
import { Controller, Get, Query } from '@nestjs/common'
import { GuestsService } from './guest.service'

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get('stars')
  async getGuestStars(@Query('event_id') eventId: string) {
    return this.guestsService.fetchGuestStars(Number(eventId))
  }
}
