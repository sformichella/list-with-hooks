import React, { useState, useEffect } from 'react';
import { getCharacter } from '../../../services/rickAndMorty';
import CharacterDetails from '../../presentation/CharacterDetails/CharacterDetails';

export default function Details({ match }) {
  const [character, setChar] = useState([]);

  useEffect(() => {
    const { id } = match.params;

    getCharacter(id)
      .then(chars => setChar(chars));
  }, []);

  return (
    character.length === 0 ? <h1>Loading</h1>
      : <CharacterDetails character={character}/>  
  );
}

