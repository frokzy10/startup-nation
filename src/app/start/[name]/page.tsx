"use client"
import {useParams} from "next/navigation";

export default function CountryName() {
    const params = useParams();
    return <main>{params.name}</main>
}