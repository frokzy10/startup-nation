import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const BackgroundContainer = styled('div')<{ backgroundImage: string }>(({ backgroundImage }) => ({
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImage})`,
    transition: 'background-image 1s ease-in-out',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
    position: 'relative',
}));

export const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
});
