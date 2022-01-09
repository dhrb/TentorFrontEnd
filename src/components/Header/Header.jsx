import {useState} from "react";

import burger from '../../assets/burger.svg';
import styles from './Header.module.css';

export default function Header () {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
      <header className={styles.header}>
        <img
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className={styles.burger}
            src={burger}
            alt="menu"/>
        {showMobileMenu &&(
          <aside className={styles.mobileMenu}>
            <p>
              Магазин
            </p>
            <p>
              Про нас
            </p>
            <p>
              Контакти
            </p>
            <p>
              Пошук
            </p>
          </aside>
        )}
      </header>)
}
