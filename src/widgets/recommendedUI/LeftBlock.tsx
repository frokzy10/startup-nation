import React, {FC} from 'react';
import {Avatar} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface LeftBlockProps {
    src: string,
    title: string,
}


const LeftBlock: FC<LeftBlockProps> = ({src,title}) => {
    return (
        <Box sx={{display: 'flex', gap: 5, alignItems: 'center', mt: 5}}>
            <Avatar
                sx={{width: '50%', height: 200, borderRadius: 10}}
                src={src}
                alt="food">
            </Avatar>
            <Box sx={{display:'flex', justifyContent:'flex-end', flexDirection:'column', gap:6}}>
                <Typography
                    variant={'h4'}>
                    {title}
                </Typography>
                <IconButton
                    sx={{border:'2px solid black', maxWidth:45}}
                    aria-label="delete">
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default LeftBlock;