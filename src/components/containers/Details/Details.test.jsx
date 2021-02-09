import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Details from './Details';

describe('Details', () => {
  it('renders a character\'s details', async() => {
    render(<Details match={{ params: { id: 1 } }}/>);

    const character = await screen.findByTestId('character');

    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
