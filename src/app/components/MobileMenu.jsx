import Image from 'next/image'
import styles from '../page.module.css'

export default function MobileMenu(props) {
  const { openMenu, setOpenMenu, handleMenuIconClick } = props;

  return (
    <ul className={styles.mobileMenu}>
      <a href="#faq">
        <li onClick={handleMenuIconClick}><h2>booking faq</h2></li>
      </a>
      <a href="#designs">
        <li onClick={handleMenuIconClick}><h2>availble designs</h2></li>
      </a>
      <a href="https://instagram.com/seppukoool" target="new">
        <li onClick={handleMenuIconClick}><h2>portofolio</h2></li>
      </a>
      {/* <a href="#shop">
        <li onClick={handleMenuIconClick}><h2>shop</h2></li>
      </a> */}
    </ul>
  )
}
