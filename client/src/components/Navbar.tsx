import Link from "next/link";

const styles = {
  nav: "sticky-top flex bg-blue-600 justify-between pl-40 pr-40 pt-16 pb-10 items-center h-16 text-black relative shadow-sm font-mono",
  title: "pl-8 w-1/4",
  ul: "flex justify-between items-center space-between ",
  li: "m-3 hover:underline hover:pb-1 text-white",
  h2: "",
  logo: "text-2xl text-white font-Lob",
};


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h2 className={styles.logo} >Wage Wise</h2>
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
