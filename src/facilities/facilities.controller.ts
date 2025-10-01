// src/facilities/facilities.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { VenueDataDto } from './dto/venue-data.dto';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Get('venue')
  async getVenue(@Query('event_id') eventId: string, @Query('merchant_id') merchant_id: string): Promise<VenueDataDto | { message: string }> {
    const data = await this.facilitiesService.fetchVenueData(+eventId, +merchant_id);
    if (!data) {
      return { message: 'Venue not found' };
    }
    return data;
  }
}
