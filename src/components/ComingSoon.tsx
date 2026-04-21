import { Box, Typography } from '@mui/material';
import herbs from '/herbs.jpg'

export default function ComingSoon() {
    return (
        <Box sx={{
            backgroundImage: `url(${herbs})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxWidth: "100vw",
            minHeight: "100vh",
            display: 'flex',
            placeContent: 'center',
            placeItems: 'center',
        }}>
            <Typography variant='h1' color='primary.light'>COMING SOON...</Typography>
        </Box>
    );
}