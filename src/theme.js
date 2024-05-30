import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
        default: "#16202C"
    },
    navbarBlue: {
        default: "#33495E"
    },
    yellow: {
        default: "#FFC11C"
    },
    inactiveYellow: {
        default: "#BB901A"
    },
    loginBlue: {
        default: "#1DBCC0"
    },
    red: {
        default: "#E50B0A"
    },
    loadingGreen: {
        default: "#198754"
    },
    linkBlue: {
        default: "#00FFFF"
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  },
});

export default theme;