import styles from './styles.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/earth-globe.png" alt="Through.World" />
      <h1>Through.World</h1>
    </div>
  );
}
