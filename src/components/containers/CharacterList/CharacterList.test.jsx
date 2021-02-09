import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  it('renders a character list', async() => {
    render(<CharacterList />);

    const list = await screen.findByTestId('character-list');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
