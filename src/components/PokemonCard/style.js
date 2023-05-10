import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(85,100,91,0.34)',
        padding: '15px',
        margin: '10px',
        border: 'none',
        borderRadius: theme.spacing(2),
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0 3px 15px rgba(0, 0, 0, 0.3)',
        },
    },
    mediaContainer: {
        position: 'relative',
        paddingTop: '100%',
        overflow: 'hidden',
        borderRadius: theme.spacing(5),
    },
    media: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 0.3s ease-in-out',
        '&:hover': {
            opacity: 0.8,
        },
    },
    cardContent: {
        padding: theme.spacing(2),
        backgroundColor: 'rgba(161,89,89,0.16)',
        borderRadius: theme.spacing(2),
    },
    title: {
        extend: '%flex-col-start-center',
        textTransform: 'capitalize',
        textAlign: "center"
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
    catchButton: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkgreen',
        },
    },
    favoriteButton: {
        backgroundColor: '#ab4848',
        color: '#af5a5a',
        '&:hover': {
            backgroundColor: 'darkpurple',
        },
    },
    detailsButton: {
        backgroundColor: '#f87103',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkblue',
        },
    },
}));

