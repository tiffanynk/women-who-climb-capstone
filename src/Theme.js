const theme = {
    palette: {
        primary: {
            light: 'rgba(111, 157, 128, 1)',
            main: 'rgba(31, 112, 78, 1)',
            dark: 'rgba(0, 5, 11, 1)',
            contrastText: '#fff'
            },
        secondary: {
            light: 'rgba(247, 139, 2, 1)',
            main: 'rgba(246, 159, 70, 1)',
            dark: 'rgba(187, 79, 6, 1)',
            contrastText: 'rgba(0, 5, 11, 1)'
            },
    },
    form: {
        margin: '100px auto 0 auto',
        textAlign: 'center'
    },
    image: {
        width: '50%'
    },
    title: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem'
    },
    progress: {
        position: 'absolute'
    },
    overrides: {
        MuiButton: {
            root: {
                margin: 10
            }
        },
        MuiCard: {
            root: {
                width: '100%'
            }
        }
    }
}

export default theme;