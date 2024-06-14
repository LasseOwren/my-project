import React from 'react';
import PropTypes from 'prop-types';

// The Background component takes in 'image' and 'children' as props.
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

// Specifies the type of props expected by the Background component.
Background.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Background;
