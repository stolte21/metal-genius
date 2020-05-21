import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ArtistListItem from './ArtistListItem';

const useStyles = makeStyles(theme => ({
    list: {
        maxHeight: '100%',
        width: '100%',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 8
    }
}));

const hideScrollbar = {
    overflow: 'hidden'
};

const ArtistList = ({
    artists,
    artistId,
    genre
}) => {

    const classes = useStyles();
    const listElement = useRef(null);

    useEffect(() => {
        if (listElement) {
            listElement.current.scrollTop = 0;
        }
    }, [genre]);

    return (
        <List
            className={classes.list}

            // on mobile the scrollbar was remaining visible
            // when the artist dialog was open
            style={artistId ? hideScrollbar : null}

            // get the list element to reset scroll position
            // when genre selection changes
            ref={listElement}
        >
            {artists.map(({ id }) => (
                <ArtistListItem
                    key={id}
                    id={id}
                />
            ))}
        </List>
    );
};

const mapStateToProps = ({ selectedArtist, selectedGenre }) => {
    return {
        artistId: selectedArtist,
        genre: selectedGenre
    };
};

export default connect(mapStateToProps)(ArtistList);