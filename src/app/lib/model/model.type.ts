export interface ICity {
    name: string;
    population?: number;
    description?: string;
}

export interface IHotel {
    name: string;
    address?: string;
    street?: string;
    rating?: number;
    social?: string;
    description?: string;
    image?: string;
    time?: string;
}

export interface ICafe {
    name: string;
    rating?: string;
    street?: string;
    description?: string;
    social?: string;
    meals?: string;
    image?: string;
    time?: string;
}

export interface IAttraction {
    name: string;
    description?: string;
    image?: string;
    history?: string;
    year?: number;
    street?: string;
    time?: string;
}

export interface IEntertainment {
    name: string;
    floors?: number;
    street?: string;
    image?: string;
    time?: string;
}

export interface Image {
    url?: string;
}

export interface ICountry {
    country: string;
    cities: ICity[];
    hotels: IHotel[];
    cafe: ICafe[];
    attractions: IAttraction[];
    entertainment: IEntertainment[];
    images: Image[];
    description: string;
}