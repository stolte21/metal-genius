import React from 'react';
import { 
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#bb86fc'
        }
    }
}));

const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;