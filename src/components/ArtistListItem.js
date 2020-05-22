import React from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { selectArtist } from '../actions';

const ArtistListItem = ({
    // props
    id,
    rowStyle,
    artists,

    // actions
    selectArtist
}) => {

    const geniusData = artists.get(id.toString());

    if (!geniusData) {
        return (
            <ListItem style={rowStyle}>
                <ListItemAvatar>
                    <Skeleton
                        variant="circle"
                        height={40}
                        width={40}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={<Skeleton variant="text" />}
                />
            </ListItem>
        );
    }

    const handleClick = () => {
        selectArtist(id);
    };

    const {
        image_url,
        name
    } = geniusData;

    return (
        <ListItem
            style={rowStyle}
            button
            onClick={handleClick}
        >
            <ListItemAvatar>
                <Avatar
                    src={image_url}
                    alt={name}
                />
            </ListItemAvatar>
            <ListItemText
                primary={name}
            />
        </ListItem>
    );
};

const mapStateToProps = ({ geniusArtists }) => {
    return {
        artists: geniusArtists
    };
};

export default connect(mapStateToProps, { selectArtist })(ArtistListItem);