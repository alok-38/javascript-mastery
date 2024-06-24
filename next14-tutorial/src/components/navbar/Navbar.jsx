// Import necessary modules and components
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

// Define Navbar as a regular function
const Navbar = ({ session }) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        {/* Use <div> or <span> for styling */}
        <div className={styles.logo}>Logo</div>
      </Link>
      <div>
        {/* Pass session prop to Links component */}
        <Links session={session} />
      </div>
    </div>
  );
};

// Export Navbar as default
export default Navbar;
