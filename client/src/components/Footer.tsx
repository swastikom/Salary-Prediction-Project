import React from 'react'

const styles = {
  footer: "justify-center align-center",
  footerContainer: "flex align-center justify-center items-center pt-5 pb-5",
  footerItems: "pl-5 pr-5 text-white",
  footerCopyright: "justify-center items-center text-white",
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerContainer}>
        <li className={styles.footerItems}>Home</li>
        <li className={styles.footerItems}>About</li>
        <li className={styles.footerItems}>Contact</li>
      </ul>
      <div className={styles.footerCopyright}>Copyright</div>
    </div>
  );
}
  

export default Footer