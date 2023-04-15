import Link from "next/link";

const styles = {
  nav: "flex bg-[#202021] justify-between pl-24 pr-24 items-center h-16 bg-white text-black relative shadow-sm font-mono",
  title: "pl-8 w-1/4",
  ul: "flex justify-between items-center space-between ",
  li: "m-3 text-[#04acc9] hover:underline hover:pb-1",
  h2: "text-[#ffffff]"
};


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h2 className={styles.logo}>Wage Wise</h2>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
