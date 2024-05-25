import React from 'react';
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

const Spinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: "#fff",
                justifyContent: 'center',
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100vh",
                zIndex: 999,
            }}
        >
            <CircularProgress sx={{zIndex: 1000}}/>
        </Box>
    );
};

export default Spinner;