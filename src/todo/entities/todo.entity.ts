import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  BACKLOG = 'backlog',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum')
  status: Status;

  @Column()
  content: JSON;
}
