import React from 'react'
import styles from './page.module.css'
import Link from "next/link"


const Portfolio = () => {
  return (
    <div className={styles.container}>
      
        <h4 className={styles.selectTitle}> Choose a gallery</h4>
        <div className={styles.items}>

          <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
           </Link>
        
        
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
           </Link>
        
        
        <Link href="/portfolio/applications" className={styles.item}>
        <span className={styles.title}>Applications</span>
         </Link>
      </div>
 
      </div>
  
  )
}

export default Portfolio