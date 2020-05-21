import React, { useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ArtistBubble from './ArtistBubble';
import ArtistList from './ArtistList';
import { fetchGeniusArtists } from '../actions';
import { getArtistsOfGenre } from '../selectors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            // the genre menu is 150px in height
            height: 'calc(100% - 150px)'
        }
    },
    mobileContainer: {
        height: '100%',
        paddingBottom: 16
    },
    row: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        height: 100,
        width: 100,
        [theme.breakpoints.down('sm')]: {
            height: 50,
            width: 50
        },
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    wrapper: {
        height: 100,
        width: 100,
        [theme.breakpoints.down('sm')]: {
            height: 50,
            width: 50
        },
        margin: 4,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '50%',
        transition: 'all .2s',
        '&:hover': {
            height: 110,
            width: 110,
            [theme.breakpoints.down('sm')]: {
                height: 55,
                width: 55
            }
        }
    }
}));

/**
 *  This component arranges the given list of artists
 *  in a circle shaped grid of bubbles. It is hardcoded to accept
 *  5 rows totalling 21 bubbles (3 bubbles in the top and bottom, 5 bubbles else).
 * 
 * TODO: Accept any some number of artists and arrange them in a circle grid. Or add
 * TODO: some pagination capability.
 */
const ArtistsLayout = ({
    // props
    mobileLayout = false,
    artists,
    genre,

    // actions
    fetchGeniusArtists
}) => {

    const classes = useStyles();

    useEffect(() => {
        fetchGeniusArtists(artists)
    }, [genre, fetchGeniusArtists, artists])

    const renderBubbleLayout = () => {
        const rows = [];

        // sanity check, there should be exactly 21 artists
        if (artists.size === 21) {
            rows.push(renderRow(artists.slice(0, 3), 0));
            rows.push(renderRow(artists.slice(3, 8), 1));
            rows.push(renderRow(artists.slice(8, 13), 2));
            rows.push(renderRow(artists.slice(13, 18), 3));
            rows.push(renderRow(artists.slice(18), 4));
        }

        return rows;
    };

    const renderRow = (artists, row) => {
        return (
            <div key={row} className={classes.row}>
                {artists.map(({ id }) => (
                    <ArtistBubble
                        key={id}
                        id={id}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <Container
                maxWidth="lg"
                className={clsx({
                    [classes.mobileContainer]: mobileLayout
                })}
            >
                {mobileLayout ? (
                    <ArtistList artists={artists} />
                ) : (
                    renderBubbleLayout()
                )}
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        artists: getArtistsOfGenre(state),
        genre: state.selectedGenre
    };
};

export default connect(mapStateToProps, { fetchGeniusArtists })(ArtistsLayout);