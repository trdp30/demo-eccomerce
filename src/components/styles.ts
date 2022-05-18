import { makeStyles } from 'makeStyles'

const useStyles = makeStyles()(() => {
  return {
    inputClass: {
      ':focus': {
        border: 'none',
        borderBottomWidth: '0 !important',
        backgroundColor: 'unset'
      }
    },
    select: {
      padding: '10px 20px 10px 20px',
      backgroundColor: '#eee',
      borderRadius: 0,
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px',
      svg: {
        marginRight: '10px'
      }
    },
    flashDealCarouselContainer: {},
    flashDealCarousel: {}
  }
})

export default useStyles
