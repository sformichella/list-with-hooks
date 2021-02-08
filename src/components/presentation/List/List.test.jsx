import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const { asFragment } = render(<List />);
    expect(asFragment()).toMatchSnapshot();
  });
});
