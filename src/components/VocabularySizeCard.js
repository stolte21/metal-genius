import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CircularProgress } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Card from './Card';

const useStyles = makeStyles(theme => ({
    content: {
        position: 'relative',
        height: 225,
        width: 225,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    shadowArc: {
        position: 'absolute',
        color: '#424242',
        zIndex: 1
    },
    arc: {
        position: 'absolute',
        zIndex: 2
    },
    text: {
        zIndex: 3
    },
    description: {
        display: 'flex',
        justifyContent: 'center',
        zIndex: 3
    },
    icon: {
        height: '0.85em'
    },
    percentText: {
        fontSize: '0.85rem'
    }
}));

const GreenUpArrow = (props) => {
    return (
        <KeyboardArrowUpIcon
            style={{ color: green[500] }}
            {...props}
        />
    );
};

const RedDownArrow = (props) => {
    return (
        <KeyboardArrowDownIcon
            style={{ color: red[500] }}
            {...props}
        />
    );
};

const VocabularySizeCard = ({
    size,
    averageSize
}) => {

    const classes = useStyles();
    const [progress, setProgress] = useState(0);
    const progressElement = useRef(null);
    const moreThanAverage = size > averageSize ? true : false;
    const comparison = moreThanAverage ? 'more' : 'less';
    const Icon = moreThanAverage ? GreenUpArrow : RedDownArrow;
    const percentDifference = Math.round((Math.abs(size - averageSize) / averageSize) * 100);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(percentDifference);
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [percentDifference]);

    useEffect(() => {
        if (!moreThanAverage && progressElement) {
            // better way to do this?
            const svgStyle = progressElement.current.firstChild.firstChild.style;
            if (svgStyle.strokeDashoffset[0] !== '-') {
                svgStyle.strokeDashoffset = '-' + svgStyle.strokeDashoffset;
            }
        }
    }, [moreThanAverage, progress]);

    const renderProgressBars = () => {
        return (
            <>
                <CircularProgress
                    className={classes.shadowArc}
                    variant="static"
                    value={100}
                    size="100%"
                    thickness={1.5}
                />
                <CircularProgress
                    ref={progressElement}
                    className={classes.arc}
                    variant="static"
                    value={progress}
                    size="100%"
                    thickness={1.5}
                />
            </>
        );
    };

    const renderContent = () => {
        return (
            <>
                <Typography
                    className={classes.text}
                    variant="h3"
                >
                    {size}
                </Typography>
                <div className={classes.description}>
                    <Icon 
                        classes={{
                            root: classes.icon
                        }}
                    />
                    <Typography
                        className={classes.percentText}
                        variant="body1"
                    >
                        {`${percentDifference}% ${comparison} than average`}
                    </Typography>
                </div>
            </>
        );
    };

    return (
        <Card
            title="Vocabulary Size"
            content={
                <>
                    <div className={classes.content}>
                        {renderProgressBars()}
                        {renderContent()}
                    </div>
                </>
            }
        />
    );
};

export default VocabularySizeCard;