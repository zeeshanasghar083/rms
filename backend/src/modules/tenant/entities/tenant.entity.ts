import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { User } from '../../user/entities/user.entity'

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  cnic: string

  @Column()
  phone: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => User, (user) => user.tenants)
  user: User
}
