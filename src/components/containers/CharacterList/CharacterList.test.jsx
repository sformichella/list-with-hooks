import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  it('changes the search input', async() => {
    render(<CharacterList />);

    const list = await screen.findByTestId('character-list');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
