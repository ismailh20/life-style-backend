// guests.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Guest } from './guest.model';
import { GuestSchedule } from './guest-schedule.model';

@Injectable()
export class GuestsService {
  constructor(
    @InjectModel(Guest)
    private readonly guestModel: typeof Guest,

    @InjectModel(GuestSchedule)
    private readonly guestScheduleModel: typeof GuestSchedule,
  ) {}

  async fetchGuestStars(eventId: number) {
    return this.guestModel.findAll({
      where: { event_id: eventId },
      include: [GuestSchedule],
    });
  }
}
