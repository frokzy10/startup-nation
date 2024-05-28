// Footer.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import {FooterContainer, FooterCss} from "@/widgets/footer/Footer.styles";
import {Avatar, Icon} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';


const Footer: React.FC = () => {

    return (
        <FooterCss >
            <FooterContainer sx>
                <Container sx={{ margin: '0 auto', display:'flex', justifyContent:'center',flexDirection:'column'}}>
                    <Typography variant="h3" sx={{color: '#1976d2',}}>
                        TourGuide
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {'Copyright © '}
                        <Link color="inherit" href="https://your-website.com/">
                            TourGuide
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
                <Container sx={{display: 'flex',alignItems:'center', flexDirection: 'column'}}>
                    <Typography variant={'h5'}>NAVIGATION</Typography>
                </Container>
                <Container sx={{display: 'flex',alignItems:'center', flexDirection: 'column', gap: 2}}>
                    <Typography variant={'h5'}>Connect with us</Typography>
                    <Typography>(+996)500492820 Nurel</Typography>
                    <hr style={{width: 175}}/>
                    <Typography>(+996)555300711 Nurdin</Typography>
                    <Container sx={{display: 'flex',alignItems:'center',justifyContent:'center', gap: 2}}>
                        <Avatar sx={{bgcolor: 'white'}}><a style={{color: 'blue'}} href="#"><XIcon/></a></Avatar>
                        <Avatar sx={{bgcolor: 'white'}}><a style={{color: 'blue'}}
                                                           href="#"><InstagramIcon/></a></Avatar>
                        <Avatar sx={{bgcolor: 'white'}}><a style={{color: 'blue'}} href="#"><TelegramIcon/></a></Avatar>
                        <Avatar sx={{bgcolor: 'white'}}><a style={{color: 'blue'}} href="#"><WhatsAppIcon/></a></Avatar>
                    </Container>
                </Container>
            </FooterContainer>
        </FooterCss>
    );
}

export default Footer;
