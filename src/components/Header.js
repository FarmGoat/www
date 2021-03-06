import React, { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import Logo from '../images/HarvestDash-Logo-White.svg';

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  const handleScroll = throttle(() => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition === 0) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  }, 300);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

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
        zIndex: 99,
        transition: 'background-color 0.3s ease-in-out',
      }}
      bg={!isOnTop ? 'rgba(0, 0, 0, 0.3)' : ''}
    >
      <Flex px={4} py={3} alignItems="center" variant="container">
        <Box mr={3} width={['40px', '50px']} height="auto">
          <Logo css={{ width: '100%', height: 'auto' }} />
        </Box>
        <Text fontFamily="brand" fontWeight="bold" fontSize={[3, 4]}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
