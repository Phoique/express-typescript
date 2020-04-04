import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  role: number;

  @Column({ type: 'text', nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false })
  password: string;
}