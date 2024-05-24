export interface ICity {
    _id: string;
    name: string;
    population: number;
    description: string;
}
export interface ICountry {
    _id: string;
    country: string;
    description: string;
    cities: ICity[];
    hotels: any[];
    cafe: any[];
    attractions: any[];
    entertainment: any[];
    images: any[];
}