import * as models from './models';

export interface VehicleDto {
    id?: number;

    userName?: string;

    userId?: number;

    vehicleType?: string;

    passengerCapability?: number;

    vehicleDescription?: string;

    model?: string;

    brand?: string;

    patent?: string;

    photos?: Array<string>;

}
