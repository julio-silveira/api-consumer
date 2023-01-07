import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#D6DF27'
    },
    secondary: {
      main: '#1BA2A1'
    }
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F1624',
          color: 'white'
        }
      }
    }
  }
})

export default theme
