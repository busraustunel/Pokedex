import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'rgba(68,7,72,0.63)',
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },
    navButton: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(0.5),
        },
    },
}));
