import about from '/about.jpg'
import portrait from '/about-photo.jpg'
import { Box, CardMedia, Typography } from '@mui/material';

export default function About() {
    return (
        <Box sx={{
            backgroundImage: `url(${about})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    pt: '8%',
                }}
            >
                <CardMedia
                    component="img"
                    alt="portrait"
                    image={portrait}
                    sx={{
                        width: {
                            xs: '150px',
                            md: '400px'
                        },
                        maxWidth: '400px',
                        borderRadius: 100,
                    }}
                />
                <Box sx={{ maxWidth: '300px' }}>
                    <Typography variant='h5' pb={1}>
                        About me
                    </Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit nostra bibendum venenatis, faucibus cum eleifend sociosqu a vel pretium tempor vitae, ridiculus nulla posuere lectus praesent mollis gravida nam hac. Ridiculus sodales tempus rhoncus augue primis mi, pellentesque vel scelerisque vestibulum sapien praesent malesuada, conubia morbi sociis orci litora.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}