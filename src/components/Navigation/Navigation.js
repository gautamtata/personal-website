import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router-dom';

import Logo from './spinning-wheel.png';
import * as Styled from './Navigation.style';

const Navigation = ({ location }) => (
  <Box
    width="100%"
    maxWidth="450px"
    position="fixed"
    left={0}
    zIndex={100}
    as="nav"
    role="navigation"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="10px 0 10px 10px"
    >
      <Styled.LogoLink
        to="/"
        aria-label="Home page"
      >
        <span
          className="logo-link_content"
          tabIndex="-1"
        >
          <img 
            className='logo'
            alt='logo' 
            style={{"height":"100px","width":"100px"}}
            src={Logo} />
        </span>
      </Styled.LogoLink>
      <Styled.NavList
        page={location.pathname}
      >
        <li>
        <Link 
            to="/"
            aria-label="About page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              Home
            </span>
          </Link>
        </li>
        <li>  
          <Link 
            to="/about"
            aria-label="About page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              About
            </span>
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio"
            aria-label="Portfolio page"
          >
            <span
              className="nav-link_content"
              tabIndex="-1"
            >
              Portfolio   
            </span>
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default withRouter(Navigation);