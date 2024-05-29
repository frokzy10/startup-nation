import mongoose from "mongoose";
import {IAttraction, ICafe, ICity, ICountry, IEntertainment, IHotel, IImage} from "@/app/lib/model/model.type";

const Schema = mongoose.Schema;

const HotelSchema = new Schema<IHotel>({
    name: {type: String, required: true},
    address: String,
    street: String,
    rating: String,
    social: String,
    description: String,
    image: String,
    costAnHour: Number,
    time: String,
});
const MealsSchema = new Schema({
    name:String,
    description:String,
    image:String,
})
const CafeSchema = new Schema<ICafe>({
    cafeName: {type: String, required: true},
    cafeRating: String,
    cafeStreet: String,
    cafeDescription: String,
    cafeSocial: String,
    cafeMeals: [MealsSchema],
    cafeImage: String,
    cafeTime: String,
});

const AttractionSchema = new Schema<IAttraction>({
    name: {type: String, required: true},
    description: String,
    image: String,
    history: String,
    year: Number,
    street: String,
    time: String,
});

const EntertainmentSchema = new Schema<IEntertainment>({
    name: {type: String, required: true},
    floors: Number,
    street: String,
    image: String,
    time: String,
    description: String,
});

const ImageSchema = new Schema<IImage>({
    url: {type: String, required: true},
});

const CitySchema = new Schema<ICity>({
    _id: {type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId()},
    name: {type: String, required: true},
    population: {type: Number, required: true},
    description: {type: String, required: true},
    hotels: [HotelSchema],
    cafes: [CafeSchema],
    attractions: [AttractionSchema],
    entertainments: [EntertainmentSchema],
});

const CountrySchema = new mongoose.Schema<ICountry>({
    _id: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId()},
    country: {type: String, required: true},
    description: {type: String, required: true},
    cities: [CitySchema],
    images: [ImageSchema],
});
const Country = mongoose.models.Country || mongoose.model<ICountry>("Country", CountrySchema);
export default Country;