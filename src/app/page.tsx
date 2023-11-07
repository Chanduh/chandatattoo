'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Designs from './Components/Designs'
import DesignGallery from './components/DesignGallery'
import Faq from './Components/Faq'
import Book from './Components/Book'
import Shop from './Components/Shop'
import MobileMenu from './Components/MobileMenu'
import { useState } from 'react'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenuIconClick = () => {
    (openMenu)? setOpenMenu(false) : setOpenMenu(true);
  }

  const [bookingForm, setBookingForm] = useState(false);
  const handleBookingClick = () => {
    setBookingForm(true);
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.banner}>
        <h4>seppukoool tattoo</h4>
        <h1 onClick={handleMenuIconClick}>+</h1> 
        {/* ✦ */}
      </nav>

      {openMenu && <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} handleMenuIconClick={handleMenuIconClick}/>}

      <div className={styles.container}>
        <section id="header" className={styles.header}>
          <Image src="/skull.png" alt="" width="300" height="400" className={styles.logo}/>
          <ul>
            <a href="#faq">
              <li>booking faq</li>
            </a>
            <a href="#designs">
              <li>availble designs</li>
            </a>
            <a href="https://instagram.com/seppukoool" target='new'>
              <li>portofolio</li>
            </a>
            <a href="#shop">
              <li>shop</li>
            </a>
          </ul>
        </section>

        <section id="content">
          {bookingForm && <Book/>}
          {/* <Book /> */}
          <DesignGallery />
          {/* <Designs /> */}
          <Faq />
          <Shop />
        </section>
      </div>

      <footer id="bookButton" className={styles.footer}>
        <a href="#book">
          <h4 onClick={handleBookingClick}>BOOK NOW</h4>
        </a>
      </footer>

    </div>
  )
}
