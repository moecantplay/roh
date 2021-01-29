import styles from "./Navbar.module.scss";

export default function Navbar({ buttonFunc }) {
  

  return (
    <div className={styles.navbarWrap}>
      <div className={styles.navbarLogo}>
        <button className={styles.navbarButton} onClick={buttonFunc}>
          <img src="/assets/logo-roh.svg" alt="ROH" />
        </button>
      </div>
    </div>
  );
}
