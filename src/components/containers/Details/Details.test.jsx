import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Details from './Details';

describe('Details', () => {
  it('changes the search input', async() => {
    render(<Details match={{ params: { id: 1 } }}/>);

    const character = await screen.findByTestId('character');

    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
