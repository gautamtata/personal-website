import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import TextLoop from 'react-text-loop';

import * as Styled from './Home.style';

import { Linkedin, Github, Medium, Gmail } from '../index';
import ProfilePic from '../../gautam-1.gif'

const Home = () => (
  <React.Fragment>  
    <Row
      mx={0}
      px={15}
      pt={{xs:"120px", sm:"130px", lg:"140px", xl:"155px"}}
      pb="20px"
    >
      <Col
        px={0}
        xs={12}
        sm={10}
        osm={1}
        lg={8}
        olg={2}
        my={0}
        mx="auto"
      >
        <Box
          as="header"
          role="banner"
        >
          <Styled.Heading>
            Hello World.&nbsp;
            <br className="break-large"/>
            My name is
            Gautam Tata.&nbsp;
            <br className="break-large"/>
            I'm&nbsp;
            <br className="break-under-xs"/>
            <TextLoop
              interval={2500}
              springConfig={{ stiffness: 30, damping: 10 }}
              mask
            >
              <span>
                a Fullstack developer
              </span>
              <span>
                an Engineer
              </span>
              <span>
                UI/UX enthusiast
              </span>
              <span>
                a Coffee Lover
              </span>
              <span>
                a Student of the game
              </span>
              <span>
                a Team player
              </span>
              <span>
                a Tech Geek
              </span>
            </TextLoop>&nbsp;
            <br className="break-small"/>
          </Styled.Heading>
        </Box>
      </Col>
    </Row>
    <Row
      mx={0}
      mt={{xs: "20px", md: "35px", lg:"45px"}}
      px={15}
    >
      <Col
        px={0}
        maxWidth="1100px"
        width="100%"
        my={0}
        mx="auto"
        as="section"
        role="region"
      >
        <Styled.SocialParagraph>
          Connect with me
        </Styled.SocialParagraph>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          mb={15}
        >
          <Styled.SocialLink 
            href="https://www.linkedin.com/in/gautam-tata-b91b20118/
            "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Linkedin />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://github.com/gautamtata"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Github />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="mailto:gautam@gautamtata.com?subject=Job Opportunitiy"
            aria-label="Send email to gautam@gautamtata.com"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Gmail />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://medium.com/@gautamtata"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Medium />
            </span>
          </Styled.SocialLink >
        </Box>
      </Col>
    </Row>
  </React.Fragment>  
);

export default Home;