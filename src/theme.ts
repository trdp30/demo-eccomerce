import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { lightBlue, grey, red } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: red,
    secondary: lightBlue,
    background: {
      default: grey[100]
    }
  },
  typography: {
    fontSize: 14
  }
})
theme = responsiveFontSizes(theme)

export default theme
