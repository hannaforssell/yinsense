import { Box } from '@mui/material';
import * as React from 'react';
import home from '/public/home.jpg'

export default function Home() {
    return (
        <Box sx={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
        }}></Box>
    );
}