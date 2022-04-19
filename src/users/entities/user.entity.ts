import { Exclude } from 'class-transformer';
import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Length(2, 20)
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;
}
