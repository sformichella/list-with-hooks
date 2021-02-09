const API_URL = 'https://rickandmortyapi.com/api/';

const getCharacters = () => {
  return fetch(API_URL + 'character')
    .then(res => res.json())
    .then(json => json.results);
};

const getCharacter = id => {
  return fetch(API_URL + `character/${id}`)
    .then(res => res.json())
    .then(json => json.results);
};

export {
  getCharacter,
  getCharacters
};
