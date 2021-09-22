import * as React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { getByText, screen } from '@testing-library/dom';
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

  it('dropdown with regions, then selecting a region fetches filtered list of countries', async () => {
    const { getByText, getByTestId, container } = render(<App />);
    await waitFor(() => {
      const dropdownElement = getByText('Filter by region', { exact: false });
      expect(document.body.contains(dropdownElement));
      fireEvent.mouseDown(dropdownElement);
    });

    await waitFor(() => {
      // hardcoded react-select option ID because no label, no role to query from :(
      const dropdownOptionElement = container.querySelector('#react-select-3-option-0');
      if (dropdownOptionElement) {
        expect(document.body.contains(dropdownOptionElement));
        fireEvent.click(dropdownOptionElement);
      }
    });

    await waitFor(() => {
      const filteredCountryListElement = getByTestId('filtered-country-list');
      expect(document.body.contains(filteredCountryListElement));
    });
  });

  it('click on a country should navigate to its details page', async () => {
    const { getByLabelText, getByTestId } = render(<App />);
    await waitFor(() => {
      const singaporeElement = getByLabelText('Singapore', { exact: false });
      expect(document.body.contains(singaporeElement));
      fireEvent.click(singaporeElement);
    });
    await waitFor(() => {
      const countryDetailsElement = getByTestId('country-details');
      expect(document.body.contains(countryDetailsElement));
    });
  });

  it("click on a country's border countries should navigate to its details page", async () => {
    const { getByText, getByTestId, container } = render(<App />);
    await waitFor(() => {
      const ukElement = container.querySelector('[aria-label*="United Kingdom"]');
      if (ukElement) {
        expect(document.body.contains(ukElement));
        fireEvent.click(ukElement);
      }
    });
    await waitFor(() => {
      const irlElement = container.querySelector('[href="/country-details/alpha3/IRL"]');
      if (irlElement) {
        expect(document.body.contains(irlElement));
        fireEvent.click(irlElement);
      }
    });
    await waitFor(() => {
      const countryDetailsElement = getByTestId('country-details');
      expect(document.body.contains(countryDetailsElement));
    });
  });
});
afterEach(cleanup);
