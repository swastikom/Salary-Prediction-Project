import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: "400",
});

const styles = {
  nav: " sticky-top flex bg-blue-500 justify-between pl-40 pr-40 pt-16 pb-10 items-center h-16 text-black relative font-mono",
  title: "pl-8 w-1/4",
  ul: "flex justify-between items-center space-between ",
  li: "m-3 hover:underline hover:pb-1 text-white text-xl font-san",
  h2: "",
  logo: `text-4xl text-white ${lobster.variable} font-nunu`,
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
