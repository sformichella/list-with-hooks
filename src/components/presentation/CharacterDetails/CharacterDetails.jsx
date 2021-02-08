import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, image, status }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={image}/>
      <p>{status}</p>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};
