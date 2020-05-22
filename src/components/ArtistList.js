import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import ArtistListItem from './ArtistListItem';

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 8
    }
}));

const VirtualizedList = ({
    artists,
    genre
}) => {

    const classes = useStyles();
    const listElement = createRef();

    useEffect(() => {
        if (listElement && listElement.current) {
            listElement.current.scrollTo(0);
        }
    }, [genre, listElement]);

    const RowItem = ({ index, style }) => {

        const { id } = artists.get(index);

        return (
            <ArtistListItem
                key={index}
                rowStyle={style}
                id={id}
            />
        );
    };

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    className={classes.list}
                    height={height}
                    width={width}
                    itemCount={artists.size}
                    itemSize={56}

                    // get the list element to reset scroll position
                    // when genre selection changes
                    ref={listElement}
                >
                    {RowItem}
                </List>
            )}
        </AutoSizer>
    );
};

const mapStateToProps = ({ selectedGenre }) => {
    return {
        genre: selectedGenre
    };
};

export default connect(mapStateToProps)(VirtualizedList);