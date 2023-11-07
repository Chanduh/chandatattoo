// import Image from 'next/image'
// import styles from '../page.module.css'

// export default function Faq() {
//   return (

//           <div id="faq" className={styles.content}>
//             <h2>Booking FAQ</h2>
//               <h3>Are you booking?</h3>
//               <p>Yes</p>

//               <h3>How do I book?</h3>
//               <p>Hit the book now button and fill out the form completely. I'll contact you ASAP with open time slots that meet your availability for you to choose from. We will discuss in more depth what you want so that I can start designing. A deposit is required to secure the appointment and I cannot start designing or hold the time for you without one.</p>

//               <h3>What is the deposit policy?</h3>
//               <p>All deposists are sent via Venmo or Cashapp and are non-refundable. The deposit will be $50-$100 depending on how onvolved the design is. 100% of your deposit will be applied to the cost of your tattoo. Please be sure you want the appointment before you book. If you need to reschedule within 48 hours of your appointment time your deposit can be rolled over to the new appointment. If you cancel or reschedule without proper notice or are excessively late to your appointment without reaching out you may forfeit your deposit. The deposit is only good for you and for the design you booked.  </p>

//               <h3>Where is the shop?</h3>
//               <p>1222 N 29th st, Brewerytown, Philly, PA</p>

//               <h3>I need to get a hold of you ASAP!</h3>
//               <p>The fastest way to contact me is to DM me via Instagram.</p>

//               <h3>Why didn't you post my tattoo on IG?</h3>
//               <p>Because I don't post every tattoo I do. I rarely even remember to take pictures. Don't be offended, for sanity reasons I have mostly chosen to forget Instragram exists.</p>
         
//               <h3>It's my first tattoo!</h3>
//               <p>Yay! I love tattooing first-timers. Please be sure to let me know in advance so I can walk you through the whole process. Be sure to arrive to your appoitnment well-rested and fed. No need to arrive early like the doctors office - I'll see you at the scheduled time!</p>
//           </div>

//   )
// }

import Image from 'next/image'
import styles from '../page.module.css'

export default function Faq() {
  return (
    <div id="faq" className={styles.content}>
      <h2>Booking FAQ</h2>
      <h3>Are you booking?</h3>
      <p>Yes</p>

      <h3>How do I book?</h3>
      <p>
        Hit the book now button and fill out the form completely. I&apos;ll contact you ASAP with open time slots that meet your availability for you to choose from. We will discuss in more depth what you want so that I can start designing. A deposit is required to secure the appointment and I cannot start designing or hold the time for you without one.
      </p>

      <h3>What is the deposit policy?</h3>
      <p>
        All deposits are sent via Venmo or Cashapp and are non-refundable. The deposit will be $50-$100 depending on how involved the design is. 100% of your deposit will be applied to the cost of your tattoo. Please be sure you want the appointment before you book. If you need to reschedule within 48 hours of your appointment time, your deposit can be rolled over to the new appointment. If you cancel or reschedule without proper notice or are excessively late to your appointment without reaching out, you may forfeit your deposit. The deposit is only good for you and for the design you booked.
      </p>

      <h3>Where is the shop?</h3>
      <p>1222 N 29th st, Brewerytown, Philly, PA</p>

      <h3>I need to get a hold of you ASAP!</h3>
      <p>The fastest way to contact me is to DM me via Instagram.</p>

      <h3>Why didn&apos;t you post my tattoo on IG?</h3>
      <p>Because I don&apos;t post every tattoo I do. I rarely even remember to take pictures. Don&apos;t be offended, for sanity reasons I have mostly chosen to forget Instagram exists.</p>

      <h3>It&apos;s my first tattoo!</h3>
      <p>Yay! I love tattooing first-timers. Please be sure to let me know in advance so I can walk you through the whole process. Be sure to arrive at your appointment well-rested and fed. No need to arrive early like the doctor&apos;s office - I&apos;ll see you at the scheduled time!
      </p>
    </div>
  );
}
