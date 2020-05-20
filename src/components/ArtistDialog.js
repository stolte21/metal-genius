import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Slide
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArtistDashboard from './ArtistDashboard';
import LoadingSpinner from './LoadingSpinner';
import { selectArtist, fetchArtistAnalysis } from '../actions';
import { FETCH_ARTIST_ANALYSIS } from '../actions/types';
import { createLoadingSelector } from '../selectors';

const useStyles = makeStyles({
    appBar: {
        position: 'relative'
    },
    content: {
        height: '100%'
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ArtistDialog = ({
    // props
    loading,
    id,
    aggregateData,
    artist,
    stats,

    // actions
    selectArtist,
    fetchArtistAnalysis
}) => {

    const classes = useStyles();

    useEffect(() => {
        if (id) {
            fetchArtistAnalysis(id);
        }
    }, [id, fetchArtistAnalysis]);

    const handleClose = () => {
        selectArtist('');
    };

    return (
        <Dialog
            fullScreen
            open={Boolean(id)}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar
                className={classes.appBar}
                color="default"
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            {
                Boolean(id) &&
                <div className={classes.content}>
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <ArtistDashboard
                            aggregateData={aggregateData}
                            artist={artist}
                            stats={stats}
                        />
                    )}
                </div>
            }
        </Dialog>
    )
};

const loadingSelector = createLoadingSelector([FETCH_ARTIST_ANALYSIS]);
const mapStateToProps = (state) => {

    const {
        selectedArtist,
        aggregateData,
        geniusArtists,
        artistStats
    } = state;

    return {
        loading: loadingSelector(state),
        id: selectedArtist,
        aggregateData,
        artist: geniusArtists.get(selectedArtist.toString()),
        stats: artistStats.get(selectedArtist.toString())
    };
};

export default connect(
    mapStateToProps,
    { selectArtist, fetchArtistAnalysis }
)(ArtistDialog);