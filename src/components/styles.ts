import { makeStyles } from '../makeStyles';

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
    addMargin: {
      marginTop: '24px',
      marginBottom: '24px'
    },

    bannerContainer: {
      height: '650px',
      width: '100vw'
    },

    bannerHeight: {},

    bannerImage: {
      height: '650px',
      width: '100%'
    },

    column2Card: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: "center",
      justifyContent: 'center',
      backgroundColor: '#eee',
      padding: '20px'
    },

    column2CardContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },

    column2CardImage: {
      flex: 1,
      textAlign: 'center',
      img: {
        height: '150px'
      }
    },
    column3CardImage: {
      flex: 1,
      textAlign: 'center',
      img: {
        height: '117px'
      }
    },
    column2Card2content2: {
      display: 'flex',
      // flexDirection: "row",
      // justifyContent: "space-between",
      backgroundColor: '#eee',
      padding: '20px'
    },

    newProductCarousel: {
      // height: "800px",
    },

    newProductImage: {
      width: '330px',
      height: '330px'
    },

    newProductMargin: {
      // marginLeft: "20px",
      // marginRight: "20px",
    },

    newProduct: {
      width: '364px'
      // height: "400px",
      // border: "1px solid black",
    },

    newProductPaper: {
      // marginTop: "10px",
      // marginLeft: "10px",
      // marginRight: "10px",
      margin: '10px',
      padding: '20px'
    },

    newProductTitle: {
      fontWeight: '700'
    }
  };
});

export default useStyles;
