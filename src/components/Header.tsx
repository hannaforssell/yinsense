import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ButtonBase } from '@mui/material';

import logo from '/logo.avif'


export default function Header({
    currPage,
    changePage,
}: {
    currPage: string;
    changePage: (nextPage: string) => void;
}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    console.log(currPage);


    return (
        <AppBar
            position="sticky"
            sx={{
                boxShadow: 0,
                bgcolor: 'primary.light',
                backgroundImage: 'none',
            }}
        >
            <Container maxWidth={false}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '20px' }}
                    >
                        <ButtonBase
                            onClick={() => changePage('Home')}
                            sx={{
                                borderRadius: 2,
                                overflow: "hidden",
                                display: "block"
                            }}
                        >
                            <img
                                src={logo}
                                alt="logo"
                                style={{
                                    height: 80,
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />
                        </ButtonBase>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button onClick={() => { changePage('Home') }} variant="text" color="primary" size="large">
                                Home
                            </Button>
                            <Button onClick={() => { changePage('About') }} variant="text" color="primary" size="large">
                                About
                            </Button>
                            <Button onClick={() => { changePage('Services') }} variant="text" color="primary" size="large">
                                Services
                            </Button>
                            <Button onClick={() => { changePage('Contact') }} variant="text" color="primary" size="large" sx={{ minWidth: 0 }}>
                                Contact
                            </Button>
                        </Box>

                        <Box>
                            <Button color="primary" variant="contained" size="small" sx={{
                                display: {
                                    xs: "none",
                                    md: "inline-flex",
                                },
                                "&:hover": {
                                    backgroundColor: "secondary.main",
                                },
                            }}>
                                Bookings
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'primary.light' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem sx={{ color: 'primary.main', fontSize: '18px' }} onClick={() => {
                                    setOpen(false);
                                    changePage('Home');
                                }}>HOME</MenuItem>
                                <MenuItem sx={{ color: 'primary.main', fontSize: '18px' }} onClick={() => {
                                    setOpen(false);
                                    changePage('About');
                                }}>ABOUT</MenuItem>
                                <MenuItem sx={{ color: 'primary.main', fontSize: '18px' }} onClick={() => {
                                    setOpen(false);
                                    changePage('Services');
                                }}>SERVICES</MenuItem>
                                <MenuItem sx={{ color: 'primary.main', fontSize: '18px' }} onClick={() => {
                                    setOpen(false);
                                    changePage('Contact');
                                }}>CONTACT</MenuItem>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button color="primary" variant="contained" fullWidth sx={{ "&:hover": { backgroundColor: "secondary.main" } }}>
                                        Bookings
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}