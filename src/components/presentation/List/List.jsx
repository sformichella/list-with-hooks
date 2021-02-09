import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

export default function List({ characters }) {
  return (
    <ul data-testid="character-list">
      {
        characters.map(character => {
          return <li key={character.id}><Character {...character}/></li>;
        })
      }
    </ul>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }))
};
