import * as React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
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

  it('changes colour', () => {
    const { getByRole, getByTestId } = render(<App />);
    const changeColourButton = getByRole('button', { name: 'change colour' });
    const headerElement = getByTestId('root');
    let bgc = getComputedStyle(headerElement).getPropertyValue('background-color');
    let colours = ['rgb(250, 250, 250)', 'rgb(34, 45, 55)'];
    expect(colours).to.include.members([bgc]);
    colours = colours.filter((c) => c !== bgc);
    fireEvent(
      changeColourButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    bgc = getComputedStyle(headerElement).getPropertyValue('background-color');
    expect(colours).to.include.members([bgc]);
  });

  it('fetches full list of countries', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      const fullCountryListElement = getByTestId('full-country-list');
      expect(document.body.contains(fullCountryListElement));
    });
  });

  it('dropdown with regions', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      const regionDropdownElement = getByText('Filter by region', { exact: false });
      expect(document.body.contains(regionDropdownElement));
    });
  });

  it('fetches filtered list of countries', async () => {
    const { getByText, getByTestId } = render(<App />);
    await waitFor(() => {
      const dropdownElement = getByText('Filter by region', { exact: false });
      fireEvent.mouseDown(dropdownElement);
      const dropdownOptionElement = getByText('Asia');
      fireEvent.click(dropdownOptionElement);
    });
    await waitFor(() => {
      const filteredCountryListElement = getByTestId('filtered-country-list');
      expect(document.body.contains(filteredCountryListElement));
    });
  });
});
afterEach(cleanup);
