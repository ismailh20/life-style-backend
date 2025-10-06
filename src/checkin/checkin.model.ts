import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { TicketDetail } from '../tickets/ticket-detail/ticket-detail.model';

@Table({ tableName: 'checkins', timestamps: false })
export class Checkin extends Model<Checkin> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => TicketDetail)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'ticket_detail_id',
  })
  ticket_detail_id: number;

  @BelongsTo(() => TicketDetail)
  ticket_detail: TicketDetail;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'checked_in_at',
    defaultValue: DataType.NOW,
  })
  checked_in_at: Date;
}
