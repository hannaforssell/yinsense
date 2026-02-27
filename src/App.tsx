import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Banner from './components/Banner';

const theme = createTheme({
    palette: {
        primary: {
            light: '#f7f4ed',
            main: '#524225',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#FAF4EB',
            main: '#758f79',
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

            <Banner />
            <Header currPage={page} changePage={changePage} />

            {page === 'Home' && <Home />}
            {page === 'About' && <About />}
            {page === 'Services' && <Services />}
            {page === 'Contact' && <Contact />}

            <Footer />
        </ThemeProvider>
    );
}