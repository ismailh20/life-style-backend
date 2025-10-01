import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Event } from '../events/events/event.model';
import { Ticket } from '../tickets/ticket.model';

@Table({
  tableName: 'orders',
  timestamps: false,
})
export class OrderTransaction extends Model<OrderTransaction> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  order_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;
}
