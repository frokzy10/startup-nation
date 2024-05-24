"use client"
import {Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <Container sx={{marginTop:"10px"}}>
            <Typography sx={{textAlign: "center",fontSize:"2.5rem"}} variant="h2">
                Добро пожаловать в перенаправление!
            </Typography>
            <Link href="/start">
                <Button variant="contained" sx={{display: "flex", m: "15px auto"}}>
                    Перейти
                </Button>
            </Link>
        </Container>
    )
}

