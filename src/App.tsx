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
});

export default function App() {
    const [content, setContent] = React.useState('Home');

    const changeContent = (content: string) => {
        setContent(content);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />

            <AppAppBar changeContent={changeContent} />

            {content === 'Home' && <Home />}
            {content === 'About' && <About />}
            {content === 'Services' && <Services />}
            {content === 'Contact' && <Contact />}

            <Footer />
        </ThemeProvider>
    );
}