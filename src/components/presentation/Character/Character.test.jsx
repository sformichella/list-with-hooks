import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character 
      id={1}
      name="Cool name"
      image="character-image.com"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
