'use client';

import { useGetItemByIdQuery } from '@/redux/services/itemApi';
import styles from './index.module.scss';
import { getFormattedCurrency } from '@/app/utils/utils';
import Image from 'next/image';

const ItemDetails = ({ pageParams }) => {
  const { id } = pageParams;
  const { data, isLoading } = useGetItemByIdQuery(id, { skip: !id });

  const item = data?.result?.item;

  const hasFreeShipping = item?.free_shipping ? 'Envio Gratis' : '';

  const formattedPrice = getFormattedCurrency(
    item?.price?.currency,
    item?.price.amount,
    2
  );

  return (
    <div className={styles.itemContainer}>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className={styles.imageContainer}>
            {item?.picture && (
              <div className={styles.image}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={item?.picture}
                  alt={item?.title}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={styles.condition}>{item?.condition}</span>
              <h2 className={styles.title}>{item?.title}</h2>
              <p className={styles.price}>{formattedPrice}</p>
              <p className={styles.freeShipping}>{hasFreeShipping}</p>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
          {item?.description && (
            <div className={styles.descriptionContainer}>
              <h2>Descripción del producto</h2>
              <p>{item?.description}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
