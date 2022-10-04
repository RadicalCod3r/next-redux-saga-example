import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {

  return (
    <div className={styles.container}>
      <h2>
        <Link href='/users/'>Users</Link>
      </h2>
    </div>
  )
}

export default Home;
