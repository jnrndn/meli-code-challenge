import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from '@/redux/services/itemApi';
import ItemDetails from './index';
import { useGetItemByIdQuery } from '@/redux/services/itemApi'; // replace with your actual api file path

jest.mock('../../../redux/services/itemApi', () => ({
  ...jest.requireActual('../../../redux/services/itemApi'),
  useGetItemByIdQuery: jest.fn(),
}));

const renderWithProviders = async (component) => {
  const store = await configureStore({
    reducer: { [itemApi.reducerPath]: itemApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itemApi.middleware),
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe('ItemDetails component', () => {
  test('displays item data when available', () => {
    const mockData = {
      id: '1',
      title: 'Test Item',
      price: {
        currency: 'USD',
        amount: 100,
        decimals: 2,
      },
      picture: 'http://example.com/test.jpg',
      condition: 'new',
      free_shipping: true,
    };
    useGetItemByIdQuery.mockReturnValue({
      data: {
        result: {
          ...mockData,
        },
      },
      error: null,
      isLoading: false,
    });
    const { getByText, getByAltText } = renderWithProviders(
      <ItemDetails pageParams={{ id: '1' }} />
    );
    waitFor(async () => {
      expect(getByText('Test Item')).toBeInTheDocument();
      expect(getByText('$100')).toBeInTheDocument();
      expect(await getByAltText('Test Item')).toHaveAttribute(
        'src',
        'http://example.com/test.jpg'
      );
    });
  });
});
