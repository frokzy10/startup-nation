"use client"
import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import LeftBlock from "@/widgets/recommendedUI/LeftBlock";
import RightBlock from "@/widgets/recommendedUI/RightBlock";
import {useSelector} from "react-redux";
import {isAuthSelectors} from "@/entities/isAuth";
import {useRouter} from "next/navigation";

const RecommendationPage = () => {
    const isAuth = useSelector(isAuthSelectors.getIsAuth);
    const router = useRouter();

    if(!isAuth){
        return router.push("/start")
    }

    return (
        <Container>
            <Typography
                sx={{mt: 5}}
                variant="h3">
                Our recommended places
            </Typography>
            <LeftBlock
                src={'https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.webp?b=1&s=170667a&w=0&k=20&c=JyZorfsSyyL3bANRR2HrY4CUMFH8avqs3lvm0YlU8bU='}
                title={'I think its time for snack'}
            />
            <RightBlock
                src={'https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.webp?b=1&s=170667a&w=0&k=20&c=JyZorfsSyyL3bANRR2HrY4CUMFH8avqs3lvm0YlU8bU='}
                title={'lol'}
            />
        </Container>
    );
};

export default RecommendationPage;