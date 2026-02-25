import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';

const theme = createTheme({
    palette: {
        primary: {
            light: '#E8D3AC',
            main: '#5C4519',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#FAF4EB',
            main: '#527057',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
    typography: {
        h1: {
            fontFamily: '"Source Serif 4", serif',
            fontWeight: 500,
            //fontStyle: 'italic',
        },
    },
});

export default function App() {
    const [page, setPage] = React.useState('Home');

    const changePage = (content: string) => {
        setPage(content);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />

            <AppAppBar currPage={page} changePage={changePage} />

            {page === 'Home' && <Home />}
            {page === 'About' && <About />}
            {page === 'Services' && <Services />}
            {page === 'Contact' && <Contact />}

            <Footer />
        </ThemeProvider>
    );
}