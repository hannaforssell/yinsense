import { Box } from '@mui/material';
import home from '/home.jpg'

export default function Services() {
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