import { makeStyles } from 'makeStyles'

const useStyles = makeStyles()(() => {
  return {
    quantityBox: {
      height: 35,
      minWidth: 35
    },
    quantityButton: {
      maxWidth: 35
    },
    quantityText: {
      padding: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
})

export default useStyles
