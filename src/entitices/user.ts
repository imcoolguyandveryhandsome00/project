
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import PetBaseEntity from './Petbaseentity';
import Pet from './pet';


@Entity()
export default class User extends PetBaseEntity {

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    address : string;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column()
    phone : string;

    @Column({default : false})
    is_admin : boolean;

    @OneToMany(()=>Pet,(pet)=>pet.owner)
    pets : []

}