import React from 'react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles, { layout } from '../style';

const PrivacyPolicy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <section ref={ref} className={layout.section}>
        <motion.div
          initial={{ x: -400 }}
          animate={inView ? { x: 100 } : {}}
          transition={{ duration: 0.8 }}
          className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Privacy Policy for Corazor Technology Private Limited</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            At Corazor Technology Private Limited, we are committed to protecting your privacy. This
            policy outlines our practices concerning the collection, use, and disclosure of your
            information.
          </p>
          <h3 className={`${styles.heading2} mt-5`}>Information Collection and Use</h3>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            We collect personal information such as your name, contact details, and any other
            information you choose to provide. This information is used to deliver our Services, improve
            our offerings, and communicate with you.
          </p>
          <h3 className={`${styles.heading2} mt-5`}>Sharing and Disclosure</h3>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            We do not share your personal information with third parties, except as required by law, to
            provide you with Services, or to protect our rights.
          </p>
          <h3 className={`${styles.heading2} mt-5`}>Data Security</h3>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            We take reasonable precautions to protect your personal information but cannot guarantee
            its absolute security against cyber threats.
          </p>
          <h3 className={`${styles.heading2} mt-5`}>Your Rights</h3>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            You have the right to access, correct, or delete your personal information held by us. For any
            requests, please contact us directly.
          </p>
          <h3 className={`${styles.heading2} mt-5`}>Changes to This Privacy Policy</h3>
          <p className={`${styles.paragraph} max-w-[470px]`}>
            We may update our Privacy Policy to reflect changes to our practices. If we make material
            changes, we will notify you through our Website or by other means.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
