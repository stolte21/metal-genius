import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ScaleLoader from 'react-spinners/ScaleLoader';
//import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const LoadingSpinner = () => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <ScaleLoader
                loading={true}
                height={50}
                width={10}
                color={theme.palette.primary.main}
            />
        </div>
    );
};

export default LoadingSpinner;