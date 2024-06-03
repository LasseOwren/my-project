import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ image, children }) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

Background.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Background;
