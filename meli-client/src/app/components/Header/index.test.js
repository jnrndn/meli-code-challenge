import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from '@/redux/services/itemApi';
import Header from './index';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const renderWithProviders = (component) => {
  const store = configureStore({
    reducer: { [itemApi.reducerPath]: itemApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itemApi.middleware),
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe('Header component', () => {
  test('renders without crashing', () => {
    const { getByAltText } = renderWithProviders(<Header />);
    waitFor(async () => {
      const image = await getByAltText('Mercado Libre Logo');
      expect(image).toBeInTheDocument();
    });
  });

  test('handles input change', () => {
    const { getByPlaceholderText } = renderWithProviders(<Header />);
    const input = getByPlaceholderText('Nunca Dejes de buscar...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
