'use client';

import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      router.push(`/items?search=${searchQuery}`);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogoClick = () => {
    setInputValue('');
    setSearchQuery('');
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.14/mercadolibre/logo__large_plus.png"
          alt="Mercado Libre Logo"
          width={134}
          height={34}
          onClick={handleLogoClick}
        />
      </div>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Nunca Dejes de buscar..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button
          disabled={inputValue === ''}
          className={styles.button}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
