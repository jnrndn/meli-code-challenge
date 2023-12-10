import styles from './styles/main.module.scss';
import Header from './components/Header';
import { Providers } from '@/redux/provider';
import './styles/global.css';

export const metadata = {
  title: 'Meli Code Challenge',
  description:
    'Aplicacion de pruebas para hacer peticiones a las API de Mercado Libre y mostrar resultados de una busqueda de items y sus detalles',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
