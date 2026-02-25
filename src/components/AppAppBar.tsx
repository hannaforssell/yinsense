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


export default function AppAppBar({
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
            position="fixed"
            sx={{
                boxShadow: 1,
                bgcolor: 'white',
                opacity: '70%',
                backgroundImage: 'none',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
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
                    </Box>
                    <Box>
                        <Button color="primary" variant="contained" size="small" sx={{
                            display: {
                                xs: "none",
                                md: "inline-flex",
                            },
                        }}>
                            Sign up for newsletter
                        </Button>
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
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
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
                                <MenuItem onClick={() => {
                                    setOpen(false);
                                    changePage('Home');
                                }}>Home</MenuItem>
                                <MenuItem onClick={() => {
                                    setOpen(false);
                                    changePage('About');
                                }}>About</MenuItem>
                                <MenuItem onClick={() => {
                                    setOpen(false);
                                    changePage('Services');
                                }}>Services</MenuItem>
                                <MenuItem onClick={() => {
                                    setOpen(false);
                                    changePage('Contact');
                                }}>Contact</MenuItem>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button color="primary" variant="contained" fullWidth>
                                        Sign up for newsletter
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