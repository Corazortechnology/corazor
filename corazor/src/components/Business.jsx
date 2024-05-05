import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>  
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${layout.section} mb-[-7%]`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You imagine the project,<br className='sm:block hidden'/>we bring it to life.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elevate your business with bespoke software solutions tailored to your unique needs.
      From concept to deployment, our team ensures your software not only meets but exceeds expectations,
      leveraging the latest technologies to drive innovation and efficiency.
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
