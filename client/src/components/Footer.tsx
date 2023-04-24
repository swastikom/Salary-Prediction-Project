import React from 'react'
import Link from 'next/link'

const styles = {
  footer: "flex flex-col justify-center align-center pt-20",
  footerContainer: "flex align-center justify-center items-center pt-5 pb-5",
  footerItems: "pl-5 pr-5 text-white",
  footerBottom: "text-white text-center justify-center pt-5 pb-5",
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerContainer}>
        <li className={styles.footerItems}><Link href={''}>Home</Link> </li>
        <li className={styles.footerItems}><Link href={''}>About</Link> </li>
        <li className={styles.footerItems}><Link href={''}>Contact</Link> </li>
      </ul>
      <div className={styles.footerBottom}>Copyright@2023</div>
    </div>
  );
}
  

export default Footer