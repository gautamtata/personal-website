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
          mb={{xs:"10px", sm:"20px", lg:"30px", xl:"40px"}}  
        >
          <Col
            xs={1}
            md={2}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
           
          </Col>
          <Col
            xs={12}
            md={8}
            mt={{xs:"10px", md:"0"}}
          >
            <img 
              src={Gautam} 
              alt="A black and white of me"
              style={
                {
                  display: 'block',
                  position: 'static',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '100%',
                  maxWidth: '300px',
                  margin: '0 auto'
                }
              }
            />     
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col>
            <Styled.SectionHeading
              as="h1"
              white
            >
              NAMASTE&nbsp;
              <span 
                role="img" 
                aria-label="Hand wave emoji"
              >
                  🙏🏾
              </span>
            </Styled.SectionHeading>
            <Styled.Paragraph white>
            I'm a full-stack engineer that just graduated from CSU Monterey Bay with a degree in Computer Science. I've built and shipped products for users. I obsess over user experience and I do whatever it takes to deliver reliable, useful software.
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
               The&nbsp;
              <br className="break-large"/>
              FullStack&nbsp;
             
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              I started coding in my first year in college. Back when I thought that everything ran via an "if-else" block.
              <br/>
              <br/> 
              I got into frontend developement when I realized there is a need for building amazing user experiences.
              Currently, Something else that I'm learning is Machine Learning on the client side.
              <br />
              Tech Stack : JS, Python, MongoDB, Node.js
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
            <Styled.SectionHeading white>
              Web&nbsp;
              <br className="break-large"/>
              Developer&nbsp;
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph white>
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
              Computer &nbsp; 
              <br className="break-large"/>
              Scientist&nbsp;
              <span 
                role="img" 
                aria-label="Thunderbolt emoji"
              >
                👦🏽
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
             BS Computer Science - CSU Monterey Bay
              <br />
             AA Chemistry & Mathematics - Diablo Valley College
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
              Favorite&nbsp;
              <br className="break-large"/>
              Quote&nbsp;
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              "The one's who are crazy enough to change the world are the one's who do."
              <br />
              <br />              
              - Steve Jobs&nbsp;
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
