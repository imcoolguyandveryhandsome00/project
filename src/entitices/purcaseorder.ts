import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import User from './user';
import Pet from './pet';
import PetBaseEntity from './Petbaseentity';


@Entity()
export default class PurchaseOrder extends PetBaseEntity{

    @ManyToOne(() => User)
    purchase_user : User

    @ManyToOne(() => Pet)
    pet : Pet

    @Column()
    date : Date;

    @Column()
    is_paid : boolean

    @Column()
    delivery_address : string
}