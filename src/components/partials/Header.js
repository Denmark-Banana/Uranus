import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const [menu, setMenu] = React.useState(null);
  const openMenu = Boolean(menu);

  const handleMenu = event => setMenu(event.currentTarget)
  const handleMenuClose = () => setMenu(null)
  
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu Appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            open={openMenu}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/info" style={{ textDecoration: 'none' }}>
                Info
              </Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Cryptocurrency
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;