import mongoose from "mongoose";
import {IAttraction, ICafe, ICity, ICountry, IEntertainment, IHotel, Image} from "@/app/lib/model/model.type";

const Schema = mongoose.Schema;

const CitySchema = new Schema<ICity>({
    name: { type: String, required: true },
    population: Number,
    description: String,
});

const HotelSchema = new Schema<IHotel>({
    name: { type: String, required: true },
    address: String,
    street: String,
    rating: Number,
    social: String,
    description: String,
    image: String,
    time: String,
});

const CafeSchema = new Schema<ICafe>({
    name: { type: String, required: true },
    rating: String,
    street: String,
    description: String,
    social: String,
    meals: String,
    image: String,
    time: String,
});

const AttractionSchema = new Schema<IAttraction>({
    name: { type: String, required: true },
    description: String,
    image: String,
    history: String,
    year: Number,
    street: String,
    time: String,
});

const EntertainmentSchema = new Schema<IEntertainment>({
    name: { type: String, required: true },
    floors: Number,
    street: String,
    image: String,
    time: String,
});

const ImageSchema = new Schema<Image>({
    url: { type: String, required: true },
});

const CountrySchema = new mongoose.Schema<ICountry>({
    country: { type: String, required: true },
    cities: [CitySchema],
    hotels: [HotelSchema],
    cafe: [CafeSchema],
    attractions: [AttractionSchema],
    entertainment: [EntertainmentSchema],
    images: [ImageSchema],
    description: { type: String, required: true },
});
const Country = mongoose.models.Country || mongoose.model<ICountry>("Country", CountrySchema);
export default Country;