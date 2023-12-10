import Image from 'next/image';
import styles from './index.module.scss';

const HomeCard = () => {
  return (
    <div className={styles.container}>
      <Image width="600" height="600" src="/home_page.svg" alt="home" />
      <div>
        <h2>Busca tus productos</h2>
        <p>Utiliza la caja de busqueda para encontrar tus productos</p>
      </div>
    </div>
  );
};

export default HomeCard;
