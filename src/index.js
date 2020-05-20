import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReduxProvider } from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import App from './components/App';

const AppContainer = () => {
    return (
        <React.StrictMode>
            <ReduxProvider>
                <ThemeProvider>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);