import style from './styles/main.module.scss';
import HomeCard from './components/HomeCard';

export default function Home() {
  return (
    <main className={style.main}>
      <HomeCard />
    </main>
  );
}
