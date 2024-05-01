import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
  <div className='flex-1 flex flex-col'>
    <h2 className={styles.heading2}>Discover the Potential </h2>
    <h2 className={`${styles.heading2} text-gradient`}>  of Custom Software</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock new opportunities for growth and innovation with our tailor-made software solutions designed to drive your business forward, anywhere in the digital landscape.
    </p>
  </div>
  <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
    <Button/>
  </div>
</section>

  )
}

export default CTA
