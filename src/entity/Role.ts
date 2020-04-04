import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export default class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}