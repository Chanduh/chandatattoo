import Image from 'next/image'
import styles from '../page.module.css'

export default function Designs() {
  return (
          
          <div id="designs">
            <h2>Available Designs</h2>
            <div className="flex">
              <Image src="/available/1.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/2.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/3.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/4.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/1.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/2.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/3.jpg" alt="" width="300" height="400" className={styles.design}/>
              <Image src="/available/4.jpg" alt="" width="300" height="400" className={styles.design}/>
            </div>
          </div>
  )
}
