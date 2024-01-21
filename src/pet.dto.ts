import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePetDTO {
    @IsNotEmpty()
    name :string;

    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    type : string;

    // @IsNotEmpty()
    // ownerId : number;

    @IsNotEmpty()
    status : string;

}
export class UpdatePetDTO {
    
    @IsNotEmpty()
    id : number;

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    color : string;

    //optionsl
    description? : string;
}

export class CreatePurcaseorderDTO {
    
    @IsNotEmpty()
    @IsString()
    user_id : number;

    @IsNotEmpty()
    pet_id : number;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;
}

export class UpdatePurchaseorderDTO {
    @IsNotEmpty()
    @IsString()
    purchase_user : string;

    @IsNotEmpty()
    pet : string;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;   
}
export class UpdatePetBaseEntityDTO {
    @IsNotEmpty()
    @IsString()
    purchase_user : string;

    @IsNotEmpty()
    pet : string;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;   
}
export class CreatePetBaseEntityDTO{
    @IsNotEmpty()
    @IsString()
    purchase_user : string;

    @IsNotEmpty()
    pet : string;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;   
}
