import dbConnect from "@/app/lib/dbConnect";
import Country from "@/app/lib/model/model";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest, route: { params: { id: string } }) {
    await dbConnect();
    try {
        const id: string = route.params.id;
        if (!id) {
            return NextResponse.json({error: 'Отсутствует идентификатор'});
        }
        const country = await Country.findOne({});
        console.log(country)
        if (!country) {
            return NextResponse.json({error: 'Страна не найдена'});
        }
        const city = country.cities.find((city: any) => String(city._id) === id);
        return NextResponse.json(city);
    } catch (error: any) {
        return NextResponse.json({e: error.message});
    }
}
