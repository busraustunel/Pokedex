import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    root: {
        width: 350,
        height: 400,
        margin: "10px",
        cursor: "pointer",
          "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                backgroundColor: "#b2b1a7",
          },
          },
    media: {
        height: 300,
        padding: "10px",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },

}));
