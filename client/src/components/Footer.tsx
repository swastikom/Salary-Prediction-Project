import React from 'react'
import Link from 'next/link'

const styles = {
  footer: "justify-center align-center",
  footerContainer: "flex align-center justify-center items-center pt-5 pb-5",
  footerItems: "pl-5 pr-5 text-white",
  footerBottom: "text-white justify-center pt-5 pb-5",
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerContainer}>
        <li className={styles.footerItems}><Link href={''}>Home</Link> </li>
        <li className={styles.footerItems}><Link href={''}>Home</Link> </li>
        <li className={styles.footerItems}><Link href={''}>Home</Link> </li>
      </ul>
      <div className={styles.footerBottom}>Copyright</div>
    </div>
  );
}
  

export default Footer