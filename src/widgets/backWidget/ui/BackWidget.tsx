"use client";
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from "@mui/material/Typography";
import {BackWidgetContainer} from "@/widgets/backWidget/ui/BackWidget.styles";
import {useRouter} from "next/navigation";

const BackWidget = () => {
    const router = useRouter();
    const handleBack = () => {
       router.back()
    }
    return (
        <BackWidgetContainer onClick={handleBack}>
            <ArrowBackIcon/>
            <Typography sx={{color:"#111",fontSize:"19px"}} variant="h6">
                Назад
            </Typography>
        </BackWidgetContainer>
    );
};

export default BackWidget;