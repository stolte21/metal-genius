import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card as MuiCard,
    CardHeader,
    CardContent
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        height: '20%',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main
    },
    content: {
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));

const Card = ({
    title,
    content
}) => {

    const classes = useStyles();

    return (
        <MuiCard>
            <CardHeader 
                className={classes.header}
                title={title}
            />
            <CardContent className={classes.content}>
                {content}
            </CardContent>
        </MuiCard>
    );
};

export default Card;