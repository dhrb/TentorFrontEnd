import { useState } from 'react';

import burger from '../../assets/burger.svg';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import heart from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
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
            <img src={logo} alt="Tentor"/>
            <p>
              Магазин
            </p>
            <p>
              Про нас
            </p>
            <p>
              Контакти
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
             <img src={search} alt="search"/>
              <p>
                Пошук
              </p>
            </div>
            <div>
              <img src={heart} alt="liked"/>
              <img src={cart} alt="cart"/>
              <p>₴0.0</p>
            </div>
          </aside>
        )}
      </header>);
}
