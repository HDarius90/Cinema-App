import styles from "./Legend.module.css";
export default function Legend() {
  return (
    <div className={styles.legend}>
      <div className={styles['free-seat']}></div>
      <span className={styles['legend-label']}>Free seats</span>
      <div className={styles['taken-seat']}></div>
      <span className={styles['legend-label']}>Occupied seats</span>
      <div className={styles['selected-seat']}></div>
      <span className={styles['legend-label']}>Selected seats</span>
    </div>
  );
}
