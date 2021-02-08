import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Character({ id, name, image }) {
  return (
    <>
      <Link to={`/${id}`}>{name}</Link>
      <img src={image}/>
    </>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
