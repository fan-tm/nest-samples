import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Partner {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  address: string;
}
