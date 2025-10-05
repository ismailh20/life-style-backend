import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Checkin } from './checkin.model';
import { TicketDetail } from '../tickets/ticket-detail/ticket-detail.model';
import { OrderTransaction } from '../order-transaction/order-transaction.model';
import { Sequelize } from 'sequelize';

@Injectable()
export class CheckinService {
  constructor(
    @InjectModel(Checkin)
    private readonly checkinModel: typeof Checkin,
  ) {}

  async getCheckinsByEvent(eventId: number): Promise<Checkin[]> {
  return this.checkinModel.findAll({
    where: Sequelize.literal(`checked_in_at IS NOT NULL`),
    include: [
      {
        model: TicketDetail,
        attributes: ['gender', 'order_id'],
        include: [
          {
            model: OrderTransaction,
            attributes: ['event_id'],
            where: { event_id: eventId },
          },
        ],
      },
    ],
  });
}
}
