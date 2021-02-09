import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetails', () => {
    const { asFragment } = render(<CharacterDetails
      name="Cool Name"
      image="image.com"
      status="Alive"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
