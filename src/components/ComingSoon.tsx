import { Box, Typography } from '@mui/material';
import herbs from '/herbs.jpg'
import Banner from './Banner';

export default function ComingSoon() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${herbs})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Banner />

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant='h1' color='primary.light'>
                    COMING SOON...
                </Typography>
            </Box>
        </Box>
    );
}