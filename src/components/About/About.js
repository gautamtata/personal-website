import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

import * as Styled from './About.style';
import Gautam from '../../gautam-1.gif'

const About = () => (
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
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col>
            <Styled.SectionHeading
              as="h1"
            >
              NAMASTE&nbsp;
              <span 
                role="img" 
                aria-label="Hand wave emoji"
              >
                  🙏🏾
              </span>
            </Styled.SectionHeading>
            <Styled.Paragraph>
              Hi. Thank you for visiting my website. Here, you can read about my life and maybe get to know me better :) 
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
      <Box
        as="main"
        role="main"
      >
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        backgroundColor="#191919"
        p={20}
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
               Curious&nbsp;
              <br className="break-large"/>
              Mind&nbsp;
             
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              I started to code very early in my life. I developed my first app in 5th grade of primary school. It was written in QBasic and based on the popular TV Show "Who wants to be a Millionaire".
              <br/>
              <br/> 
              Ever since I was a little kid, I was very curious about the world. My favorite subjects in school were mathematics, physics, and programming. I also loved learning about astronomy.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}    
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Web&nbsp;
              <br className="break-large"/>
              Developer&nbsp;
              <span 
                role="img" 
                aria-label="Programmer emoji"
              >
                👨‍💻
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph>
              I became passionate about Web development after I graduated from college. I started spending a lot of my time online, on websites like TechCrunch and Hacker News. After seeing all those cool apps, innovative startups, and brilliant developers changing our technological landscape on a daily basis, I decided I wanted to become a part of that disruptive movement.
              <br/>
              <br/> 
              So in the last year and half I learned a lot of cool stuff related to front-end and back-end development. I used that knowledge to build my portfolio and this website. I know a lot about NodeJS, ExpressJS, MongoDB, jQuery, React, Redux, Bootstrap, Mocha, Chai, Enzyme, HTML, CSS, CSS-in-JS, TDD, responsive design, progressive enhancement, graceful degradation, a11y, mobile-first design, continuous integration, code transpiling, module bundling, RESTful architecture, API's and more.  
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}  
          backgroundColor="#191919"
          p={20}
        >
          <Col
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
              Elec.&nbsp; 
              <br className="break-large"/>
              Engineer&nbsp;
              <span 
                role="img" 
                aria-label="Thunderbolt emoji"
              >
                ⚡
              </span>
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={8}
          >
            <Styled.Paragraph
              white
            >
              I have a Bachelor's degree in Computer Science from the California State University at Monterey Bay.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}  
        >
          <Col
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Proud&nbsp; 
              <br className="break-large"/>
              Father 
              <span 
                role="img" 
                aria-label="Father and son emoji"
              >
                👨‍👦
              </span>
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={8}
            mt={{xs:"20px", md:"0"}}
          >
            <img 
              src={Gautam} 
              alt="My son sitting on my shoulders on the shore of river Krka"
              style={
                {
                  display: 'block',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />     
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        backgroundColor="#191919"
        p={20}   
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
              Favorite&nbsp;
              <br className="break-large"/>
              Quote&nbsp;
              <span 
                role="img" 
                aria-label="Planet earth emoji"
              >
                🌍
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              The most inspiring words I ever heard come from the mind of Carl Sagan. He also wrote one of my favorite SciFi novels called "Contact". His reflections are inspired by a photograph of our planet, made by the Voyager 1 space probe as it was leaving our solar system. The photograph is famously known as the "Pale Blue Dot". 
              <br />
              <br />              
              The text is too long to copy here, so here's&nbsp;
              <a 
                href="https://www.youtube.com/watch?v=GO5FwsblpT8"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                <span
                  tabIndex="-1"
                  className="video-link_content"
                >
                  a link to a video
                </span>
              </a>&nbsp;
              with him reading  those words, as seen in the last scene of the 2014's "Cosmos: A SpaceTime Odyssey" documentary. Every time I watch it I get goosebumps. It inspires in me both humility and hope for a better tomorrow.
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
      <Box
        as="footer"
        role="contentinfo"
      >
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
            xs={12}
          >
            
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);
export default About;
