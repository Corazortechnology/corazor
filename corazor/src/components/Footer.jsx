import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          {/* <img
            src={logo}
            alt='logo'
            className='w-[266px] h-[172px] object-contain'
          /> */}
          {/* <h3 className='flex-1 font-poppins font-semibold ss:
          text-[52px] text-white ss:leading-[50.8px] leading-[75px]'>
            Corozor <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Technology</span> {" "}
          </h3>
          {/* <h2 className='w-[266px] h-[172px] object-contain'>   </h2> */}
          {/* <p className={`${styles.paragraph} mt-4 max-w-[310px]`}> */}
          {/* Revolutionizing your digital landscape with custom software solutions designed for your business.  */}
          {/* </p> */} 


        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10'>
          {/* {footerLinks.map((link) => ( */}
            <div  className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
    
           

            </div>
          {/* ))} */}
        </div>
     
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2024 Corazor . All Rights Reserved
        </p>  
                <div className=' flex  gap-2'>

<Link
to="/terms"
>
<button className=' font-bold  text-white p-3 border-bottom rounded-lg'>
Terms and conditions 
</button>
{/* <h4 className=' cursor-pointer font-poppins font-medium text-[18px] leading-[27px] text-[#06d6a0] mr-2 mt-7'>
    
      </h4>  */}

</Link>
<Link
to="/policy"
>
  <button className=' font-bold  text-white p-3 border-bottom rounded-lg'>
  Privacy Policy
</button>

     
</Link>
<Link
to="/refundPolicy"
>
  <button className=' font-bold  text-white p-3 border-bottom rounded-lg'>
  Refund Policy
</button>

     
</Link>

</div>
       
        <div className='flex flex-row md:mt-0 mt-6'>

      
          {socialMedia.map((social, index) => (
            <a href={social.link}>
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
            </a>
          ))}
          
        </div>  

         
 
      </div>
    </section>
    
  )
}

export default Footer
