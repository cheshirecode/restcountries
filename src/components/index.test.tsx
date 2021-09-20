import * as React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { expect } from 'chai';
import ApiResponseHandler, { API_ERROR_TEXT } from './ApiResponseHandler';
import StackedSidebar from './layouts/StackedSidebar';

describe('<ApiResponseHandler>', () => {
  it('displays Spinner if no data', () => {
    const { getByTestId } = render(<ApiResponseHandler error={undefined} data={null} />);
    const spinnerElement = getByTestId('apiresponsehandler-spinner');
    expect(document.body.contains(spinnerElement));
  });

  it('displays Error if has error', async () => {
    const { getByText } = render(<ApiResponseHandler error={Promise.reject('something')} data={[]} />);
    await waitFor(() => {
      const errorElement = getByText(API_ERROR_TEXT);
      expect(document.body.contains(errorElement));
    });
  });

  it('displays children if has data and no error', () => {
    const { getByText } = render(
      <ApiResponseHandler error={undefined} data={[]}>
        <span>data</span>
      </ApiResponseHandler>,
    );
    const childElement = getByText('data');
    expect(document.body.contains(childElement));
  });
});

describe('<StackedSidebar>', () => {
  it('renders ', () => {
    const { getByRole } = render(
      <StackedSidebar>
        <button />
      </StackedSidebar>,
    );
    const stackElement = getByRole('button');
    const minWidth = getComputedStyle(stackElement.parentElement as HTMLElement).getPropertyValue('min-width');
    expect(minWidth).to.be.eq('100%');
  });
});
afterEach(cleanup);
