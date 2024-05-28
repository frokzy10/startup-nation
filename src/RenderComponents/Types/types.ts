import mongoose from "mongoose";

export interface IHotel {
    _id:string;
    name: string;
    description: string;
    address: string;
    street: string;
    rating: number;
    social: [];
    image: string;
    costAnHour: number;
    time: string
}

export interface IAttraction {
    name: string;
    description: string;
    image: string;
    history: string;
    year: number;
    street: string;
    time: string
}

export interface IEntertainment {
    name: string;
    floors: number
    street: string;
    image: string;
    time: string
    description: string;
}

export interface ICafe {
    _id:string;
    name: string;
    rating: string;
    street: string;
    description: string;
    social: [];
    meals: [];
    image: string;
    time: string;
}

export interface IImage {
    image: any[]
    url: string;
}

export interface ICity {
    _id:string
    name: string;
    population: number;
    description: string;
    hotels?: IHotel[];
    cafes?: ICafe[];
    attractions?: IAttraction[];
    entertainments?: IEntertainment[];
}

export interface ICountry {
    _id: mongoose.Types.ObjectId;
    country: string;
    description: string;
    cities: ICity[];
    images: IImage[];
}
