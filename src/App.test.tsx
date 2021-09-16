import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('has Header', () => {
    const { getByTestId } = render(<App />);
    const headerElement = getByTestId('header');
    expect(document.body.contains(headerElement));
  });
  it('has Main', () => {
    const { getByRole } = render(<App />);
    const mainElement = getByRole('main');
    expect(document.body.contains(mainElement));
  });
  it('has Footer', () => {
    const { getByTestId } = render(<App />);
    const footerElement = getByTestId('footer');
    expect(document.body.contains(footerElement));
  });
});
