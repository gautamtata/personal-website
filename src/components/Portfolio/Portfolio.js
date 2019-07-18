import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';

import * as Styled from './Portfolio.style';
import proofchecker from '../../img/proofchecker.png';
import pgmuseum from '../../img/pgmuseum.png';
import carscan from '../../img/car-scan.gif';
import jsmaps from '../../img/jsmaps.png';


const Portfolio = () => (
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
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
            xs={12}
          >
            <Styled.SectionHeading
             style = {{"color" : "white"}}
              as="h1"
              
            >
              I'm currently looking for work!
            </Styled.SectionHeading> 
            <Styled.Paragraph
              email
              white
            >
              Feel free to contact me at&nbsp;
              <a 
                href="mailto:gautam@gautamtata.com?subject=Open positions at "
                aria-label="Send email to gautam@gautamtata.com"
              >
                <span
                  className="email-link_content"
                  tabIndex="-1"
                >
                  gautam@gautamtata.com
                </span>
              </a>.
            </Styled.Paragraph>        
          </Col>
        </Row>
      </Box>
      <Box
        as="main"
        role="main"
      >
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
<<<<<<< HEAD
              src={pgmuseum} 
=======
              src={proofchecker} 
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              alt="Screenshot showing landing page of proofchecker"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
<<<<<<< HEAD
          >     
            <Styled.SectionHeading style = {{"color" : "white"}}>
              Pacific grove climate data viz
            </Styled.SectionHeading>  
            
            <Styled.Paragraph white>
            Website for data visualizations and resources for climate change in Monterey County for the Pacific Grove Museum.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/watershed-guardians"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watershed guardians code"
=======
          >
            <Styled.SectionHeading 
            style = {{"color" : "white"}}
            >
              Logic Proof Checker
            </Styled.SectionHeading>     
            
            <Styled.Paragraph style = {{"color" : "white"}}>
            A proof checking tool for Logic that saves teaching assistants hours of grading time.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/logic-proof-checker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logic proof checker"
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
<<<<<<< HEAD
                href="https://gautamtata.github.io/watershed-guardians/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watershed guardians live app"
=======
                href="https://gautamtata.github.io/logic-proof-checker/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="proof checker live app"
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
<<<<<<< HEAD
                  View Project
=======
                  View Demo
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
<<<<<<< HEAD
              src={proofchecker} 
              alt=""
=======
              src={pgmuseum} 
              alt="Pacific grove museum project screenshot"
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
<<<<<<< HEAD
          >
            <Styled.SectionHeading 
            style = {{"color" : "white"}}
            >
              Logic Proof Checker
            </Styled.SectionHeading>     
            
            <Styled.Paragraph style = {{"color" : "white"}}>
            A proof checking tool for Logic that saves teaching assistants hours of grading time.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/logic-proof-checker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logic proof checker"
=======
          >     
            <Styled.SectionHeading style = {{"color" : "white"}}>
              Pacific grove climate data viz
            </Styled.SectionHeading>  
            
            <Styled.Paragraph white>
            Website for data visualizations and resources for climate change in Monterey County for the Pacific Grove Museum.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/watershed-guardians"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watershed guardians code"
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
<<<<<<< HEAD
                href="https://gautamtata.github.io/logic-proof-checker/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="proof checker live app"
=======
                href="https://gautamtata.github.io/watershed-guardians/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watershed guardians live app"
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
<<<<<<< HEAD
                  View Demo
=======
                  View Project
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={carscan} 
<<<<<<< HEAD
              alt="Pacific grove museum project screenshot"
=======
              alt=""
>>>>>>> 04d357282cd94e70fb9383276d34e1bf56a9b352
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >        
            <Styled.SectionHeading style = {{"color" : "white"}}>
             License plate OCR
            </Styled.SectionHeading>
          
            <Styled.Paragraph white>
            A CLI tool that is used for recognizing characters on a Number plate using a sliding window.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/License-Plate-reader"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="License plate code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={jsmaps} 
              alt="jsmaps screenshot"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >        
            <Styled.SectionHeading style = {{"color" : "white"}}>
              JS annotatable maps
            </Styled.SectionHeading>
            
            <Styled.Paragraph white>
             A tool that makes it easy for developers to customize events and interactions on a map.
            </Styled.Paragraph>
            <Styled.ProjectLinks white>
              <a 
                href="https://github.com/gautamtata/JSMaps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="jsmaps code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://js-annotated-maps.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="js maps live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Project
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;