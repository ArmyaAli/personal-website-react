import { makeStyles } from "@material-ui/styles";

export const useGlobalStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        height: 'calc(100% - 2.5vh)',
        maxWidth: 'calc(98% - 57px)',
        right: 'calc(-1 * (57px/2))',
        margin: '16px auto',
        backgroundColor: 'rgba(0,0,0,.5);',
        padding: '16px',
        color: 'white'
    },
}));