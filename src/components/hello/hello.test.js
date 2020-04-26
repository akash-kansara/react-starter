import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hello from './hello';

describe('<Hello />', () => {
  it('tests <p> tag', () => {
    const { container } = render(<Hello />);
    expect(container.querySelector('p')).not.toBeNull();
  });
  it('checks content', () => {
    const { getByText } = render(<Hello />);
    expect(getByText('Hello World!')).toBeInTheDocument();
  });
});