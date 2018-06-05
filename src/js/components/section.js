import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      { children }
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
