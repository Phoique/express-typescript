import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  role: number;

  @Column({ nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false })
  password: string;
}