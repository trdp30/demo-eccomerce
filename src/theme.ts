import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { lightBlue, grey, red } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
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
