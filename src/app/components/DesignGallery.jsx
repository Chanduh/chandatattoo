import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../page.module.css'

function DesignGallery() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    async function fetchDesigns() {
      try {
        const response = await fetch('/api/designs'); 
        if (response.ok) {
          const data = await response.json();
          setDesigns(data.designs);
          console.log(`${data.designs[0]}`)
        } else {
          console.error('Failed to fetch designs.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchDesigns();
  }, []);

  return (
    <div>
      <h2>Available Designs</h2>
      <div>
        {designs.map((designUrl, index) => (
          <Image key={index} src={`${designUrl}`} width="300" height="300" alt={`Design ${index}`} className={styles.design}/>
        ))}
      </div>
    </div>
  );
}

export default DesignGallery;
