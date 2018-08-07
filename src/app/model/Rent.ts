import * as models from './models';
import { AddressDto } from './AddressDto';

export interface Rent {

    publicationId?: number;

    addressDto?: AddressDto;

    renterId?: number;

    userId?: number;

    model?: string;

    brand?: string;

    userName?: string;

    state?: string;

    rentPrice?:number;

    userRenterName?: string;

    startingDate?: Date ;

    endingDate?: Date ;

}
