import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import ArtistCard from './ArtistCard';
import LongestWordCard from './LongestWordCard';
import WordCloud from './WordCloud';
import VocabularySizeCard from './VocabularySizeCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 32
    },
    rowItem: {
        height: 350,
        '& > div': {
            height: '100%',
            backgroundColor: '#585858'
        },
    },
    paper: {
        padding: 4,
        textAlign: 'center',
    }
}));

const ArtistDashboard = ({
    aggregateData,
    artist,
    stats
}) => {

    const classes = useStyles();
    const { averageVocabulary } = aggregateData;
    const { name } = artist;
    const { wordCounts, longestWord, vocabularySize } = stats;
    const words = wordCounts.map(([text, value]) => ({ text, value }));

    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid container spacing={2}>
                <Grid className={classes.rowItem} item xs={12} sm={12} md={4}>
                    <ArtistCard
                        artist={artist}
                    />
                </Grid>
                <Grid className={classes.rowItem} item xs={12} sm={12} md={4}>
                    <LongestWordCard
                        word={longestWord}
                    />
                </Grid>
                <Grid className={classes.rowItem} item xs={12} sm={12} md={4}>
                    <VocabularySizeCard
                        size={vocabularySize}
                        averageSize={averageVocabulary}
                    />
                </Grid>
                <Grid className={classes.rowItem} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Paper className={classes.paper}>
                        <WordCloud
                            title={name}
                            words={words}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ArtistDashboard;