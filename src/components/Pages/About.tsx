import * as React from 'react';
import about from '/public/about.jpg'
import portrait from '/public/about-photo.jpg'
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
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    pt: '180px',
                }}
            >
                <CardMedia
                    component="img"
                    alt="portrait"
                    image={portrait}
                    sx={{
                        width: '400px',
                    }}
                />
                <Typography sx={{
                    width: '300px',
                }}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit nostra bibendum venenatis, faucibus cum eleifend sociosqu a vel pretium tempor vitae, ridiculus nulla posuere lectus praesent mollis gravida nam hac. Ridiculus sodales tempus rhoncus augue primis mi, pellentesque vel scelerisque vestibulum sapien praesent malesuada, conubia morbi sociis orci litora. Elementum nostra pretium curabitur hendrerit facilisi vel lacinia vulputate ante, arcu torquent in lacus tempor ridiculus dictum ut condimentum eget, a ultricies massa facilisis nascetur bibendum etiam curae.
                </Typography>
            </Box>
        </Box>
    );
}