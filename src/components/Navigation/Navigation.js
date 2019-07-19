import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as Styled from './Navigation.style';
import { Home, About, Portfolio } from '../index';

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
      <Styled.NavList page={location.pathname}>
        <li>
          <Link to='/personal-website/' aria-label="Home Page">
            <span className="nav-link_content" tabIndex="-1">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to='/about' aria-label="About page">
            <span className="nav-link_content" tabIndex="-1">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link to='/portfolio' aria-label="Portfolio page">
            <span className="nav-link_content" tabIndex="-1">
              Portfolio
            </span>
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default withRouter(Navigation);
