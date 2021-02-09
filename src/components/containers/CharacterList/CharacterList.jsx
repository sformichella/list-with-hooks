import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../../services/rickAndMorty';
import List from '../../presentation/List/List';

export default function CharacterList() {
  const [characters, setChars] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(chars => setChars(chars));
  }, []);

  return (
    characters.length === 0 ? <h1>Loading</h1>
      : <List characters={characters}/>  
  );
}
