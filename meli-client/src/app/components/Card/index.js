import Image from 'next/image';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';
import { getFormattedCurrency } from '@/app/utils/utils';

const Card = ({ item }) => {
  const router = useRouter();
  const { picture, price, title, free_shipping, id } = item;

  const formattedPrice = getFormattedCurrency(price?.currency, price.amount);

  const hasFreeShipping = free_shipping ? 'Envio Gratis' : '';

  const handleCardClick = () => {
    router.push(`/item/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      role="button"
      className={styles.cardContainer}
    >
      <div className={styles.productContainer}>
        <Image
          width="150"
          height="150"
          src={picture}
          alt={title}
          className={styles.image}
        />
        <div className={styles.info}>
          <p className={styles.price}>{formattedPrice}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <p className={styles.freeShipping}>{hasFreeShipping}</p>
    </div>
  );
};

export default Card;
