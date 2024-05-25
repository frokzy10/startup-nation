export interface IHotel {
    description: string;
    name: string;
    address: string;
    costAnHour: number;
}

export interface ICity {
    name: string;
    population: number;
    description: string;
    hotels?: IHotel[]
}

export interface ICountry {
    _id: string;
    country: string;
    description: string;
    cities: ICity[];
    images: string[];
}