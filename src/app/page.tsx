"use client"
import {Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {isAuthSelectors} from "@/entities/isAuth";

export default function Home() {
    const isAuth = useSelector(isAuthSelectors.getIsAuth);
    return (
        <Container sx={{marginTop: "10px"}}>
            <Typography sx={{textAlign: "center", fontSize: "2.5rem"}} variant="h2">
                Добро пожаловать в перенаправление!
            </Typography>
            {!isAuth ? (
                <Link href="/start">
                    <Button variant="contained" sx={{display: "flex", m: "15px auto"}}>
                        Перейти
                    </Button>
                </Link>
            ):(
                <Link href="/start">
                    <Button variant="contained" sx={{display: "flex", m: "15px auto"}}>
                        Перейти
                    </Button>
                </Link>
            )}
        </Container>
    )
}

