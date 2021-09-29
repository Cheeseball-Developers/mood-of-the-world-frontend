import { colors, createTheme } from "@material-ui/core";
// import { purple, green, orange, deepOrange } from "@material-ui/core/colors";

// Global styles can be moved to a separate file for ease of maintenance.
export const dark = () => (createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#040f3d",
        },
        secondary: {
            main: "#757575",
        },
        background: {
            default: "#111111",
        }
    },
    typography: {
        useNextVariants: true,
        h1: {
            fontSize: '72px',
            color: '#555555'
        }
    }//,
    //common styles.
    //   global
}))

export const light = () => (createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: "#4bffa5",
        },
        secondary: {
            main: "#040f3d",
        },
        background: {
            default: '#FFFDD0'
        }
    },
    typography: {
        useNextVariants: true,
        
        h1: {
            fontFamily: 'Pacifico',
            fontSize: '72px',
            color: '#Eed07e'
        },
        h2: {
            fontSize: '72px'
        },
        h3: {
            fontFamily: 'Nunito',
            fontSize: '22px',
            fontWeight: 600,
            color: '#888888'
        },
        h4: {
            fontFamily: 'Pacifico',
            fontSize: '16px',
        },
        body1: {

        },
        body2: {
            fontFamily: 'Nunito',
            fontSize: '12px'
        },
        subtitle2: {
            fontSize: '9px',
        }
    }
    //common styles.
    //   global
}))
