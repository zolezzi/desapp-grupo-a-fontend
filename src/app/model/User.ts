import * as models from './models';

export interface User {
    id?: number;

    name?: string;

    lastName?: string;

    email?: string;

    reputation?: number;

    cuil?: string;

    addressDto?: models.AddressDto;

    vehicles?: Array<models.VehicleDto>;

    idFacebook?: string;

    idGoogle?: string;

    isRegister?: boolean;

}
