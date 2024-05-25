"use client"
import {styled} from "@mui/material/styles";

export const FooterCss = styled('div')(({theme}) => ({

    backgroundColor: '#fff',
    // textAlign: 'center',
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


// footerContent: {
//     maxWidth: 600,
//         margin: '0 auto',
// },
// footerText: {
//     margin: theme.spacing(1, 0),
// },
// link: {
//     color: 'inherit',
//         textDecoration: 'none',
//         '&:hover': {
//         textDecoration: 'underline',
//     },
// },

