import { makeStyles } from "@material-ui/core/styles";

export const useAboutMeStyles = makeStyles((theme) => ({
    innerContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr)',
    }
}));