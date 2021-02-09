import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const { asFragment } = render(<List 
      characters={[{
        id: 1,
        name: 'Rick Sanchez',
        image: 'image.com',
        status: 'Alive'
      }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
