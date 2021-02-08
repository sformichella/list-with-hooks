import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetails', () => {
    const { asFragment } = render(<CharacterDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
