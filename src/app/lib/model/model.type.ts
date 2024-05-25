import mongoose, { Document } from 'mongoose';

export interface IHotel extends Document {
    name: string;
    address: string;
    street:string;
    rating:number;
    social:[];
    description: string;
    image:string;
    costAnHour: number;
    time:string
}

export interface IAttraction extends Document {
    name: string;
    description: string;
    image:string;
    history:string;
    year:number;
    street:string;
    time:string
}

export interface IEntertainment extends Document {
    name: string;
    floors:number
    street:string;
    image:string;
    time:string
    description: string;
}

export interface ICafe extends Document {
    name: string;
    rating:string;
    street:string;
    description: string;
    social:[];
    meals:[];
    image:string;
    time:string;
}

export interface IImage extends Document {
    image:any[]
    url: string;
}

export interface ICity extends Document {
    name: string;
    population: number;
    description: string;
    hotels?: {
        [key: string]: IHotel | string;
    };
    cafes?: ICafe[];
    attractions?: IAttraction[];
    entertainments?: IEntertainment[];
}

export interface ICountry extends Document {
    _id: mongoose.Types.ObjectId;
    country: string;
    description: string;
    cities: ICity[];
    images: IImage[];
}
