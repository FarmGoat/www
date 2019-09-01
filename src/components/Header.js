import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Image, Text } from 'rebass';
import logo from '../images/HarvestDash-Logo-White.svg';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <Box
      as="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Flex px={4} py={3} alignItems="center" variant="container">
        <Image
          src={logo}
          alt="HarvestDash logo"
          mr={3}
          width={['40px', '50px']}
          height="auto"
        />
        <Text fontFamily="brand" fontWeight="bold" fontSize={[3, 4]}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
