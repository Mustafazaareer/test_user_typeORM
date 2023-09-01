import typeorm, { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt'

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({nullable:false,length:300})
    userName:string;

    @BeforeInsert()
    async hashPassword() {
        if(this.password){
            this.password = await bcrypt.hash(this.password,12);
        }
    }

    @Column({nullable:false})
    password:string;

    @CreateDateColumn({
        type:'timestamp',
        default:()=> 'CURRENT_TIMESTAMP(6)'
    })
    createdAt:Date;
}