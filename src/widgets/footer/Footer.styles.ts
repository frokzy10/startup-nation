"use client"
import {styled} from "@mui/material/styles";

export const FooterCss = styled('footer')(({theme}) => ({
    width:'100%',
    position:"absolute",
    backgroundColor: '#fff',
}));

export const FooterContainer = styled('div')(({ theme }) => ({
    textAlign:'center',
    padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    margin: 0,
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
}));