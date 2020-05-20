import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Chip,
    Typography
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Card from './Card';

const useStyles = makeStyles(theme => ({
    word: {
        color: 'white',
        fontWeight: 'bold'
    },
    typography: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        minHeight: 100,
    },
    skeleton: {
        width: '100%'
    }
}));

const LongestWordCard = ({
    word
}) => {

    const classes = useStyles();
    const [loadingDef, setLoadingDef] = useState(true);
    const [definition, setDefinition] = useState('');

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v1/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                const [{ meaning }] = data;
                const partsOfSpeechKeys = Object.keys(meaning);

                if (partsOfSpeechKeys.length > 0) {
                    const firstMeaning = meaning[partsOfSpeechKeys[0]];

                    if (firstMeaning.length > 0) {
                        const firstDefinition = firstMeaning[0].definition;
                        setDefinition(firstDefinition);
                    }
                }
            }

            setLoadingDef(false);
        });
    }, [word]);

    return (
        <Card
            title="Longest Word"
            content={
                <>
                    <Chip
                        className={classes.word}
                        color="primary"
                        label={word}
                    />

                    <Typography
                        className={classes.typography}
                        variant="body1"
                    >
                        {loadingDef ? (
                            <>
                                <Skeleton className={classes.skeleton}/>
                                <Skeleton className={classes.skeleton}/>
                                <Skeleton className={classes.skeleton}/>
                            </>
                        ) : (
                            definition
                        )}
                    </Typography>
                </>
            }
        />
    );
};

export default LongestWordCard;