import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../../../services/rickAndMorty';
import CharacterDetails from '../../presentation/CharacterDetails/CharacterDetails';

export default function Details({ match }) {
  const [character, setChar] = useState([]);

  useEffect(() => {
    const { id } = match.params;

    getCharacter(id)
      .then(char => setChar(char));
  }, []);

  return (
    character.length === 0 ? <h1>Loading</h1>
      : <CharacterDetails {...character}/>  
  );
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
  }))
};
