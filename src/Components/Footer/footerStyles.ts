import { makeStyles } from "@material-ui/core/styles";

export const useFooterStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        margin: '16px auto',
        padding: '16px',
        color: 'white'
    },
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        width: 'calc(100% - 2.5vw)',
        flexDirection: 'row',
        margin: 'auto',
        fontSize: '1.8vw'
    },
    topText: {
        display: 'inline-block',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontSize: '2.2vh',
    },
    botText: {
        display: 'inline-block',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontSize: '2.2vh',
    },
    col: {
        listStyle: 'none'
    }
}));