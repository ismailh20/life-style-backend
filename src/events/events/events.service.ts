// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './event.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async findOneByIdAndMerchant(
    eventId: number,
    merchantId: number,
  ): Promise<Event | null> {
    const event = this.eventModel.findOne({
      where: { id: eventId, merchant_id: merchantId },
    });
    return event;
  }
}
