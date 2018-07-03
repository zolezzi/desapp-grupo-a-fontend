import * as models from './models';

export interface VehicleFilter {
    id?: number;

    userId?: number;

    patent?: string;

    brand?: string;

    type?: string;

    state?: string;

    toDate?: Date;

    fromDate? : Date;

    


}
