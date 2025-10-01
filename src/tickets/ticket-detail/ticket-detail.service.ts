// src/tickets/ticket-detail/ticket-detail.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TicketDetail } from './ticket-detail.model';

@Injectable()
export class TicketDetailService {
  constructor(
    @InjectModel(TicketDetail)
    private ticketDetailModel: typeof TicketDetail,
  ) {}

  async create(ticketData: Partial<TicketDetail>): Promise<TicketDetail> {
    return await this.ticketDetailModel.create(ticketData as TicketDetail);
  }
}
