import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";

@Entity()
export default class PetBaseEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;
}