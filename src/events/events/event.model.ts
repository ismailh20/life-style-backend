// src/events/event.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Merchant } from 'src/merchants/merchant.model';

@Table({
  tableName: 'events',
  timestamps: false,
})
export class Event extends Model<Event> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Merchant)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'merchant_id',
  })
  merchant_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.STRING)
  location?: string;

  @Column({ type: DataType.DATE, field: 'start_date' })
  start_date?: Date;

  @Column({ type: DataType.DATE, field: 'end_date' })
  end_date?: Date;

  @Column(DataType.INTEGER)
  capacity?: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  status: boolean;

  @Column({ type: DataType.TEXT, field: 'image_venue' })
  image_venue?: string;

  @Column({ type: DataType.INTEGER, field: 'template_id', defaultValue: 1 })
  template_id?: number;

  @Column({ type: DataType.TEXT, field: 'hero_image' })
  hero_image?: string;

//   @BelongsTo(() => Merchant)
//   merchant: Merchant;
}
