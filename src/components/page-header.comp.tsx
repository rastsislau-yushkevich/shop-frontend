import React, { FC } from 'react';
import { AppBar, Avatar, Box, Container, IconButton, Menu, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import PageLink from './page-link.comp';
import LogoText from './logo-text.comp';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'auth/store/auth.selectors';
import { useSignOutMutation } from 'auth/store/authApi.slice';
import { removeCredentials } from 'auth/store/auth.slice';
import { toggleOpen } from 'cart/store/cart.slice';
import { User } from 'users/types/user.type';

const PageHeader: FC = () => {
  const dispatch = useDispatch();
  const user: User | null = useSelector(selectCurrentUser);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [signOut] = useSignOutMutation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleCartOpen = () => {
    setAnchorElUser(null);
    dispatch(toggleOpen());
  }

  const handleSignOut = () => {
    setAnchorElUser(null);
    signOut();
    dispatch(removeCredentials());
    localStorage.clear()
  }

  return (
    <AppBar color='secondary' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <LogoText mobile={false} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* list of links on mobile*/}
              <PageLink link='Products' handler={handleCloseNavMenu} />
            </Menu>
          </Box>
          {/* logo */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <NavLink
            to='/'
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1
            }}
          >
            <LogoText mobile={true} />
          </NavLink>
          <Box sx={{ flexGrow: 1, gap: '20px', display: { xs: 'none', md: 'flex' } }}>
            <PageLink link='products'/>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {user ? <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.email} />
              </IconButton> : <Link to='/auth/sign-in'>Sign In</Link>}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <PageLink link='cart' handler={handleToggleCartOpen} />
              <PageLink link='history' handler={handleCloseUserMenu} />
              <PageLink link='sign out' handler={handleSignOut} />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default PageHeader