import dbConnect from "@/app/lib/dbConnect";
import {NextResponse} from "next/server";
import Country from "@/app/lib/model/model";

export async function GET() {
    await dbConnect();

    try {
        const countries = await Country.find({});
        return NextResponse.json(countries);
    } catch (e: any) {
        return NextResponse.json({error: e.message})
    }
}