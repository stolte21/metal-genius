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
    artists,

    // actions
    selectArtist
}) => {

    const geniusData = artists.get(id.toString());

    if (!geniusData) {
        return (
            <ListItem>
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
            button
            onClick={handleClick}
        >
            <ListItemAvatar>
                <Avatar
                    src={image_url}
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