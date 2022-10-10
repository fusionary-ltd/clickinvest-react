import React, { useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext, initialState } from './themeContext';

import { Light, Dark } from './themeConfig';
// import '../assets/css/index.css';
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// ** Declare Theme Provider
const MuiThemeProvider = ({ children }) => {
    const [modeConfig, setModeConfig] = useState({ ...initialState })

    const setMode = (mode) => {
        setModeConfig((prevState) => ({
            ...prevState,
            mode
        }));
    };
    let theme;
    if (modeConfig.mode === 'light') {
        theme = createTheme(Light);
    } else if (modeConfig.mode === 'dark') {
        theme = createTheme(Dark);
    }

    return (
        <ThemeContext.Provider value={{ ...modeConfig, setMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default MuiThemeProvider;
