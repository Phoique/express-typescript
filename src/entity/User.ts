import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  role: number;

  @Column({ type: 'text', unique: true, nullable: false })
  username: string;

  @Column({ type: 'string', nullable: false })
  password: string;
}