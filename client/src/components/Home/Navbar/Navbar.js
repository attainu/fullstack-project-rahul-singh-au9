import React, { useState, useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import {LOGOUT} from "../../../constants/actionTypes";
import decode from 'jwt-decode';
// import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
      dispatch({
        type: LOGOUT
      });

      history.push('/auth');

      setUser(null);
    };

    useEffect(() => {

      const token = user?.token;

      if(token){
        const decodedToken = decode(token)

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem("profile")))

    },[location]);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container' style={{marginTop: '8px'}}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            US
            <i class='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{marginTop: '14px'}}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          <li className='nav-item' style={{marginTop: '10px'}}>
            <Toolbar className={classes.toolbar}>

              {
                user?.result? (
                  <div className = {classes.profile}>

                    <Link to="/dashboard">
                        <DashboardIcon style={{ fontSize: 40 }} className={classes.dashClr}/>
                    </Link>

                    <Link to='profile'>
                    <Avatar className={classes.purple}
                    alt={user?.result.name}
                    src={user?.result.ImageUrl}
                    >
                      {user?.result.name.charAt(0)}
                    </Avatar>
                    </Link>

                    <Typography className={classes.userName} variant="h6">
                        {user?.result.name}
                    </Typography>

                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                        Logout
                    </Button>
                  </div>

                ) : (
                  <Button component={Link} to="/auth" variant="contained" color="default">
                    Sign In
                  </Button>
                )
              }

            </Toolbar>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;