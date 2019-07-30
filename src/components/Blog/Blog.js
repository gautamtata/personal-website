import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';

import * as Styled from '../Portfolio/Portfolio.style';

const Portfolio = () => (
  <Row
    mx={0}
    px={15}
    pt={{ xs: '120px', sm: '130px', lg: '140px', xl: '155px' }}
    pb="20px"
  >
    <Col px={0} xs={12} sm={10} osm={1} lg={8} olg={2} my={0} mx="auto">
      <Box as="header" role="banner">
        <Row mb={{ xs: '20px', sm: '30px', lg: '40px', xl: '50px' }}>
          <Col xs={12}>
            <Styled.SectionHeading style={{ color: 'white' }} as="h1">
             COMING SOON!
            </Styled.SectionHeading>
            <Styled.Paragraph email white>
              Feel free to contact me at&nbsp;
              <a
                href="mailto:gautam@gautamtata.com?subject=Open positions at "
                aria-label="Send email to gautam@gautamtata.com"
              >
                <span className="email-link_content" tabIndex="-1">
                  gautam@gautamtata.com
                </span>
              </a>
              .
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
