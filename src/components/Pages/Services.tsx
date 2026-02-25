import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import home from '/home.jpg'
import service1 from '/service1.jpg'

export default function Services() {
    return (
        <Box sx={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
            pt: {
                xs: '30%',
                md: '8%'
            },
        }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 5,
            }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={service1}
                        title="service"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Service
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at mi sed libero molestie mollis. Vestibulum finibus in lacus sit amet ultricies. Cras vel vestibulum nibh. Morbi sed diam eget lorem ullamcorper ornare. Nulla congue eros ac augue pretium sollicitudin. Maecenas posuere magna ut consequat tincidunt. Quisque ut lectus vel odio facilisis faucibus sed eu ante. Donec ornare sagittis nisl id viverra.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={service1}
                        title="service"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Service
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at mi sed libero molestie mollis. Vestibulum finibus in lacus sit amet ultricies. Cras vel vestibulum nibh. Morbi sed diam eget lorem ullamcorper ornare. Nulla congue eros ac augue pretium sollicitudin. Maecenas posuere magna ut consequat tincidunt. Quisque ut lectus vel odio facilisis faucibus sed eu ante. Donec ornare sagittis nisl id viverra.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={service1}
                        title="service"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Service
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at mi sed libero molestie mollis. Vestibulum finibus in lacus sit amet ultricies. Cras vel vestibulum nibh. Morbi sed diam eget lorem ullamcorper ornare. Nulla congue eros ac augue pretium sollicitudin. Maecenas posuere magna ut consequat tincidunt. Quisque ut lectus vel odio facilisis faucibus sed eu ante. Donec ornare sagittis nisl id viverra.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}