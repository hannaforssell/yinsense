import { Box, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import home from '/home.jpg'
import * as React from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormErrors = Partial<FormData>;

export default function Contact() {
    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = React.useState<FormErrors>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = (): boolean => {
        const tempErrors: FormErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid";
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            console.log("Submitting:", formData);

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            setErrors({});
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100vw",
            minHeight: "100vh",
            pt: {
                xs: '30%',
                md: '8%'
            },
        }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Card sx={{
                    maxWidth: 800,
                    padding: {
                        xs: '20px',
                        md: '40px'
                    },
                    mb: '10px' // FIX THIS
                }}>
                    <CardContent sx={{
                        maxWidth: 800,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        alignItems: 'center',
                    }}>
                        <Typography gutterBottom variant="h4" component="div">
                            Contact
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                            If you have any further questions about treatment services or bookings, feel free to contact me using the form below.
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                minWidth: '100%',
                                margin: "0 auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                            }}
                        >
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                fullWidth
                            />

                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                            />

                            <TextField
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                error={!!errors.subject}
                                helperText={errors.subject}
                                fullWidth
                            />

                            <TextField
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                fullWidth
                            />

                            <Button
                                variant="contained"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
                {/* <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        alignItems: 'center',
                        //justifyContent: 'center',
                        padding: {
                            xs: '20px',
                            md: '40px'
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        width: '700px',
                        //height: '100%',
                    }}
                >
                    <Typography variant='h4'>Contact</Typography>
                    <Typography variant='body1'>
                        If you have any further questions about treatment services or bookings, feel free to contact me using the form below.
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            minWidth: '100%',
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            fullWidth
                        />

                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                        />

                        <TextField
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            fullWidth
                        />

                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            fullWidth
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </Button>
                    </Box>

                </Box> */}
            </Container>
        </Box>
    );
}