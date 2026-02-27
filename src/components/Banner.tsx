import { Typography, Container, AppBar, Box } from '@mui/material';

export default function Banner() {
    return (
        <AppBar
            position="relative"
            sx={{
                bgcolor: 'primary.main',
                opacity: '70%',
                backgroundImage: 'none',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', py: '5px' }}>
                    <Typography variant='body2'>
                        Acupuncture | Chinese Medicine
                    </Typography>
                </Box>
            </Container>
        </AppBar>
    );
}