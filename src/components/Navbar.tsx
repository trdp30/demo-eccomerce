import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Link
} from '@mui/material';
import SearchBox from 'components/common/SearchBox';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO 1
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO 2
            </Typography>

            <Box sx={{ width: '650px', display: { xs: 'none', md: 'flex' } }}>
              <SearchBox />
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none', width: '60px' } }} component="span">
              <SearchIcon fontSize="large" />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={'https://mui.com/static/images/avatar/1.jpg'} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" color={'black'}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar disableGutters sx={{ flexGrow: 1, justifyContent: 'center' }}>
        <Link component={RouterLink} to="/home">
          <Box sx={{ m: 2, display: 'block' }}>
            <Typography textAlign="center" color={'black'}>
              Quick Link 1
            </Typography>
          </Box>
        </Link>
        <Link component={RouterLink} to="/product-details">
          <Box sx={{ m: 2, display: 'block' }}>
            <Typography textAlign="center" color={'black'}>
              Quick Link 2
            </Typography>
          </Box>
        </Link>
        <Link component={RouterLink} to="/cart">
          <Box sx={{ m: 2, display: 'block' }}>
            <Typography textAlign="center" color={'black'}>
              Quick Link 3
            </Typography>
          </Box>
        </Link>
        <Link component={RouterLink} to="/order">
          <Box sx={{ m: 2, display: 'block' }}>
            <Typography textAlign="center" color={'black'}>
              Quick Link 4
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
};
export default Navbar;
