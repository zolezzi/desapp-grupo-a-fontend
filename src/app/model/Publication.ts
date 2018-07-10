import * as models from './models';
import { AddressDto } from './AddressDto';

export interface Publication {
    id?: number;

    userOfferentId?: number;

    userOfferentName?: string;

    startingDate?: Date ;

    endingDate?: Date ;

    vehicleId?: number;

    brand?: string;

    model?: string;

    rentPrice?: number;

    withdrawAddress?: AddressDto;

    returnAddress?: AddressDto;

    photos?: Array<string>;

    description?: string;

}
