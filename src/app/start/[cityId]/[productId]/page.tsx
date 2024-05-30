"use client"
import React, {useState} from 'react';
import {useParams, usePathname} from "next/navigation";
import Spinner from "@/shared/spinner/ui/Spinner";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import cls from "./Product.module.scss";
import Typography from "@mui/material/Typography";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import {useGetProductIdQuery} from "@/entities/getProductData/reducer/productReducer";
import {IMeals} from "@/RenderComponents/Types/types";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Link from "next/link";

const HotelPage = () => {
    const params = useParams();
    const location = usePathname();
    const secondPort = location.split("/")[2];
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const {data, error, isLoading} = useGetProductIdQuery({secondPort: secondPort, productId: params.productId});
    const [selectedMeal, setSelectedMeal] = useState<IMeals | null>(null);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const handleImageError = () => {
        setImageLoaded(true);
    };

    const handleSelectMeal = (meal: IMeals) => {
        setSelectedMeal(meal)
    }
    const handleCloseModal = () => {
        setSelectedMeal(null)
    }
    console.log(selectedMeal)
    if (isLoading) return <Spinner/>
    console.log(data)
    return (
        <>
            <Container className={cls.hotelWrapper}>
                <BackWidget/>
                <Box className={cls.HotelBox}>
                    <Image
                        className={cls.hotelImg}
                        width={570}
                        height={450}
                        objectFit="cover"
                        src={data?.image || data?.cafeImage ? `${data.image || data?.cafeImage}` : '/placeholder.jpg'}
                        alt={data?.name || 'Placeholder'}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                    {!imageLoaded && <Spinner/>}
                    <Box className={cls.leftHotelSide}>
                        <Typography variant="h3">{data?.name || data?.cafeName}</Typography>
                        <Typography className={cls.hotelDescription}
                                    variant="h6">{data?.description || data?.cafeDescription}</Typography>
                        <Typography className={cls.hotelCost} variant="h5">
                            {data.isCafes && ""}
                        </Typography>
                        {data.isHotel && (
                            <>
                                <Typography sx={{textAlign: "right"}} variant="h5">
                                    {data?.costAnHour}$ в сутки
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: "15px"}}>
                                    <Link href={`${params.productId}/payment?products=${data.name.replace(/\s+/g, '-')}&amount=${data.costAnHour}&img=${btoa(data.image)}`}>
                                        <Button variant="contained">
                                            Заказать
                                        </Button>
                                    </Link>
                                </Box>
                            </>
                        )}
                        {data?.isCafes && data?.cafeTime && (
                            <Typography sx={{textAlign: "right"}} variant="body1">
                                График работы: {data?.cafeTime}
                            </Typography>
                        )}
                    </Box>
                </Box>
                <Box>
                    {data?.isCafes && (
                        <>
                            <Typography sx={{marginTop: "40px"}} variant="h3">
                                Блюда из ресторана {data?.cafeName}
                            </Typography>
                            <Box className={cls.mealsContainer}>
                                {data?.cafeMeals.map((m: IMeals) => (
                                    <Box className={cls.mealsCard}>
                                        <li className={cls.mealsTitle}>
                                            {m.name}
                                        </li>
                                        <Box className={cls.mealsDescription}>
                                            {m.description}
                                        </Box>
                                        <Box className={cls.mealsInfoBtnCon}>
                                            <Button onClick={() => handleSelectMeal(m)} variant="contained"
                                                    className={cls.mealsInfoBtn}>
                                                Инфо
                                            </Button>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
                {selectedMeal && (
                    <Dialog open={!!selectedMeal} onClose={handleCloseModal}>
                        <DialogTitle>{selectedMeal.name}</DialogTitle>
                        <DialogContent>
                            <Typography>{selectedMeal.description}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Закрыть
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </>
    );
};

export default HotelPage;
