import dbConnect from "@/app/lib/dbConnect";
import Country from "@/app/lib/model/model";
import { NextResponse } from "next/server";

export async function GET(route: { params: { id: string } }) {
    await dbConnect();
    try {
        const id: string = route.params.id;
        console.log(id)
        if (!id) {
            return NextResponse.json({error: 'Отсутствует идентификатор'});
        }
        const country = await Country.findOne({});
        if (!country) {
            return NextResponse.json({error: 'Страна не найдена'});
        }

        const getHotels = (arr: any) => {
            arr.forEach((el:any) => {
                if(Array.isArray(el)){
                    getHotels(el)
                }else{
                    console.log(el)
                }
            })
        }
        getHotels(country.cities);

        return NextResponse.json({ message: 'Данные успешно найдены' })
    } catch (error: any) {
        return NextResponse.json({error: error.message});
    }
}
