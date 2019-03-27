import React from 'react';
import PropTypes from 'prop-types';
import StyledSvg from './StyledSvg';

const BottomSeparator = ({ color }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 160"
    fill={color}
  >
    <polygon points="1440,0 1440,160 0,160 " />
  </StyledSvg>
);

BottomSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BottomSeparator;
