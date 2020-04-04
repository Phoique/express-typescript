import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  namexa: string;
}