import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class HomeDto {
  id?: number;
  session?: string;
  header1?: string;
  description?: string;
  href?: string;
}

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  session: string;

  @Column({ nullable: true })
  header1: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  href: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
