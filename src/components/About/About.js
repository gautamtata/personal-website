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
               What I &nbsp;
              <br className="break-large"/>
              Am About&nbsp;
             
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              I want to build things that make a difference. A Change. Whether it's for 1 person in a small town in California or the whole freaking world.
              <br/>
              <br/> 
              I’ve always sought out opportunities and challenges that are meaningful to me. Whether it is working at a museum to help the locals understand the effects of climate change or working with professors to save hours on grading - I've never stopped engaging my passion to help others and solve problems
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
              The Full&nbsp;
              <br className="break-large"/>
              Stack&nbsp;
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph white>
            I became more passionate about Full stack development in my senior year in college. At this time, I was spending a lot of time reading documentation, other peoples code or reading HackerNews. 
             
              <br/>
              <br/> 
              Living in the Bay area, I was regularly meeting with these incredible engineers from all backgrounds who are changing the landscape of technology right in front our eyes and I get an adrenaline rush when I think that I could be a part of that.
              I mainly picked up full-stack thru MOOC's and learned Python, JavaScript ReactJS, NodeJS, ExpressJS, MongoDB, jQuery, Redux, Bootstrap, Mocha, mobile-first design, continuous integration, code transpiling, API's.  
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
              Piece Of &nbsp; 
              <br className="break-large"/>
              Paper&nbsp;
              
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
