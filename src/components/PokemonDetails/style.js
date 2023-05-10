import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(3),
        backgroundColor: '#f87103',
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[4],
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
    },
    image: {
        width: "200px",
        height: "200px",
        marginBottom: theme.spacing(3),
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[2],
    },
    abilityCard: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.spacing(0.5),
        display: "inline-block",
        margin: theme.spacing(0.5),
    },
}));
