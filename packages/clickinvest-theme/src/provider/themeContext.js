import { createContext } from 'react';

const initialState = {
    mode : 'light'
};

const ThemeContext = createContext(initialState);

export { ThemeContext, initialState };
