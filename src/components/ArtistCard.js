import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Avatar,
    Typography,
    Link
} from '@material-ui/core';
import Card from './Card';

const useStyles = makeStyles(theme => ({
    avatar: {
        border: `2px solid ${theme.palette.primary.dark}`,
        height: 150,
        width: 150
    }
}));

const ArtistCard = ({
    artist
}) => {

    const classes = useStyles();
    const { 
        name,
        image_url,
        url
    } = artist;

    return (
        <Card
            title={name}
            content={
                <>
                    <Avatar
                        className={classes.avatar}
                        src={image_url}
                        variant="circle"
                    />
                    <div>
                        <Typography>
                            <Link href={url}>
                                Genius Profile
                            </Link>
                        </Typography>
                    </div>
                </>
            }
        />
    );
};

export default ArtistCard;