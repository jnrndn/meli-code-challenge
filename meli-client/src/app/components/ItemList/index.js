'use client';

import { useGetItemsQuery } from '@/redux/services/itemApi';
import { useSearchParams } from 'next/navigation';
import Card from '@/app/components/Card';
import styles from './index.module.scss';

const ItemList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const { data, isLoading, error } = useGetItemsQuery(search, {
    skip: !search,
  });

  const items = data?.result?.items;

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {error ? (
            <p>Algo salio mal</p>
          ) : (
            <ul className={styles.itemsContainer}>
              {items?.map((item, idx) => {
                return (
                  <li className={styles.listItem} key={item.id}>
                    <Card item={item} />
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default ItemList;
