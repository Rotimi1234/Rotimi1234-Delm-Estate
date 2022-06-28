import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.brand}>
        <li>
          <span>Delm</span>
        </li>
        <li>
          <span>Our Location</span>
        </li>
        <li>
          <span>Call Us : +123 456 789</span>
        </li>
        <li>
          <div className={styles.socials}>
            <Link to="/">
              <AiOutlineInstagram />
            </Link>
            <Link to="/">
              <AiOutlineFacebook />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </li>
      </ul>

      <ul className={styles.services}>
        <li>
          <span>Services</span>
        </li>
        <li>
          <Link to="/buy">Buy a House</Link>
        </li>
        <li>
          <Link to="/rent">Rent a House</Link>
        </li>
        <li>
          <Link to="/Uplod">Sell a House</Link>
        </li>
      </ul>

      <ul className={styles.company}>
        <li>
          <span>Company</span>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
      </ul>

      <ul className={styles.support}>
        <li>
          <span>Support</span>
        </li>
        <li>
          <Link to="/">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support Center</Link>
        </li>
        <li>
          <Link to="/">Help Center</Link>
        </li>
      </ul>

      <ul className={styles.subscribe}>
        <li>
          <span>Subscribe</span>
        </li>
        <li>
          <p>Subscribe to get the latest new and promo from us</p>
        </li>
        <li>
          <div className={styles.subscribe_input}>
          <form method="POST" action="https://formsubmit.co/damilarerotimi29@gmail.com">
            <input type="email" id="email" name="email" placeholder="Email Andress" required />
            <input type="hidden" name="_captcha" value="false"></input>
            <button type="submit">
              <BsArrowRight />
            </button>
          </form>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
