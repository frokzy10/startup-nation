import {NextResponse} from "next/server";
import {NextApiRequest} from "next";
import dbConnect from "@/app/lib/dbConnect";
import Country from "@/app/lib/model/model";

export async function GET(req: NextApiRequest, route: { params: { id: string, hotelid: string } }) {
    await dbConnect();
    try {
        const { id, hotelid } = route.params;

        if (!id || !hotelid) {
            return NextResponse.json({ error: 'Отсутствует идентификатор города или отеля' });
        }

        const country = await Country.findOne({});

        if (!country) {
            return NextResponse.json({ error: 'Страна не найдена' });
        }

        const city = country.cities.find((city: any) => String(city._id) === id);
        if (!city) {
            return NextResponse.json({ error: 'Город не найден' });
        }

        const hotel = city.hotels.find((hotel: any) => String(hotel._id) === hotelid);
        const cafe = city.cafes.find((cafe: any) => String(cafe._id) === hotelid);

        const data = hotel || cafe
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
