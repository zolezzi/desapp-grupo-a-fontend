import * as models from './models';
import { AddressDto } from './AddressDto';

export interface Rent {

    publicationId?: number;

    addressDto?: AddressDto;

    renterId?: number;

    userId?: number;
}
