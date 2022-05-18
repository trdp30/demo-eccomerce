import { Grid, Stack, Box, Typography, Link } from '@mui/material'
import { Link as RouteLink } from 'react-router-dom'
import React from 'react'
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

function SectionTwo() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={3} height={'100%'}>
        <Stack
          spacing={2}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 1,
            boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)',
            padding: '32px 48px',
            textAlign: 'center'
          }}
        >
          <Box>
            <AssuredWorkloadOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Box>
            <Typography variant="h6">Secure Payment</Typography>
            <Typography variant="body2" color={'#7D879C'} sx={{ minHeight: '40px' }}>
              100% secured payment & privacy
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} height={'100%'}>
        <Stack
          spacing={2}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 1,
            boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)',
            padding: '32px 48px',
            textAlign: 'center'
          }}
        >
          <Box>
            <ChatOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Box>
            <Typography variant="h6">Great Feedback</Typography>
            <Typography variant="body2" color={'#7D879C'} sx={{ minHeight: '40px' }}>
              More than 97% positive & happy customers
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} height={'100%'}>
        <Link component={RouteLink} to={'/product'} color={'#000'} sx={{ textDecoration: 'none' }}>
          <Grid
            container
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 1,
              boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)'
            }}
          >
            <Grid item xs={12} sm={7} padding={'30px'}>
              <Typography variant="overline">SPECIAL OFFER</Typography>
              <Typography
                component="h1"
                sx={{
                  marginBottom: 0,
                  marginTop: 0,
                  fontSize: '30px',
                  fontWeight: '700',
                  lineHeight: '1.3',
                  textTransform: 'none',
                  whiteSpace: 'normal'
                }}
              >
                <Box
                  component={'span'}
                  sx={{
                    lineHeight: '1.3',
                    color: 'primary.main',
                    textTransform: 'none',
                    whiteSpace: 'normal'
                  }}
                >
                  Rs 100 Off{' '}
                </Box>{' '}
                Over
                <br /> Rs 1200
              </Typography>
              <Typography color={'#7D879C'}>
                Handcrafted from genuine Italian. One inner compartment
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ textAlign: 'center' }}>
              <Box component={'img'} src="/assets/images/paper-bag.png" />
            </Grid>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  )
}

export default SectionTwo
