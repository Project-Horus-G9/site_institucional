import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: '#49CCC6'
        },
        secondary: {
            main: '#FFF'
        },
        black: {
            main: '#000'
        },
        gray: {
            main: '#727272'
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#49CCC6',
                        },
                    },
                },
            },
        },
    },
    sidebar: {
        width: 240,
        minWidth: 60
    }
})

export default theme;