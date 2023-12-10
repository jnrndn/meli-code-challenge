import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from '@/redux/services/itemApi';
import Card from './index';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const renderWithProviders = async (component) => {
  const store = await configureStore({
    reducer: { [itemApi.reducerPath]: itemApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itemApi.middleware),
  });

  return render(<Provider store={store}>{component}</Provider>);
};

const mockData = {
  id: '1',
  title: 'Test Card',
  price: {
    currency: 'USD',
    amount: 100,
    decimals: 2,
  },
  picture:
    'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.14/mercadolibre/logo__large_plus.png',
  condition: 'new',
  free_shipping: true,
};

describe('Card component', () => {
  test('renders without crashing', () => {
    const { getByText } = renderWithProviders(<Card item={mockData} />);
    waitFor(async () =>
      expect(await getByText('Test Card')).toBeInTheDocument()
    );
  });

  test('displays correct data', () => {
    const { getByText, getByAltText } = renderWithProviders(
      <Card item={mockData} />
    );

    waitFor(async () => {
      expect(await getByText('Test Card')).toBeInTheDocument();
      expect(await getByText('$100')).toBeInTheDocument();
      expect(await getByAltText('Test Card')).toHaveAttribute(
        'src',
        'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.14/mercadolibre/logo__large_plus.png'
      );
    });
  });
});
