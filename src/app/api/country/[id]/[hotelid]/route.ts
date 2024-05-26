import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Country from "@/app/lib/model/model";

export async function GET(route: { params: { id: string } }) {
    await dbConnect();
    try {
        const id = route.params.id;
        if (!id) {
            return NextResponse.json({ error: 'Отсутствует идентификатор' });
        }

        const country = await Country.findOne({ "cities.hotels._id": id });

        if (!country) {
            return NextResponse.json({ error: 'Отель не найден' });
        }

        let hotelWithId;
        country.cities.forEach((city: any) => {
            if (city.hotels) {
                const hotel = city.hotels.find((hotel: any) => String(hotel._id) === id);
                if (hotel) {
                    hotelWithId = hotel;
                }
            }
        });

        if (!hotelWithId) {
            return NextResponse.json({ error: 'Отель не найден' });
        }

        return NextResponse.json(hotelWithId);
    } catch (e) {
        return NextResponse.json(e);
    }
}
