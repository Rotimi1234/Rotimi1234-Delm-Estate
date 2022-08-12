import styles from "./Donateinfo.module.scss";
import styled from 'styled-components';
import donate from "./dd.png"

const Button = styled.button`
  fontsize: 0.9rem;
  background: var(--dark-green);
  padding: 0.5rem 1rem;
  color: whitesmoke;
  transition: all ease-in-out 200ms;
  border: 1px solid transparent;
`
const Flex = styled.h1`
  display: flex;
`

const Section4 = () => {
  return (
    <section className={styles.section_4}>
    
      <div className={styles.section_4_title}>
        <h1>
          Help us to grow this Nigeria startup Company by supporting us.
        </h1>
      </div>
      <div className={styles.section_4_content}>
        <div className={styles.image_container}>
          <img src={donate} alt="donate" />
        </div>
        <div className={styles.info}>
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available in Delm!
          </p>


          <Flex>
          <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
            <div>
              <p>Donation of ₦1,000</p> 
            </div>
              <input type="hidden" name="public_key" value="FLWPUBK_TEST-fa35fc033f99874e75ce5688e03cccb5-X" />
              <input type="hidden" name="customer[email]" value="jessepinkman@walterwhite.org" />
              <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
              <input type="hidden" name="tx_ref" value="bitethtx-019203" />
              <input type="hidden" name="amount" value="3400" />
              <input type="hidden" name="currency" value="NGN" />
              <input type="hidden" name="meta[token]" value="54" />
              <input type="hidden" name="redirect_url" value="http://localhost:3000/donate" />
            <button type="submit"  ><Button>Donate to Us</Button></button>
          </form>
                 
          <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
            <div>
              <p>Donation of ₦3,400</p> 
            </div>
              <input type="hidden" name="public_key" value="FLWPUBK_TEST-fa35fc033f99874e75ce5688e03cccb5-X" />
              <input type="hidden" name="customer[email]" value="jessepinkman@walterwhite.org" />
              <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
              <input type="hidden" name="tx_ref" value="bitethtx-019203" />
              <input type="hidden" name="amount" value="3400" />
              <input type="hidden" name="currency" value="NGN" />
              <input type="hidden" name="meta[token]" value="54" />
              <input type="hidden" name="redirect_url" value="http://localhost:3000/donate" />
            <button type="submit"  ><Button>Donate to Us</Button></button>
          </form>
          
          
          <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
            <div>
              <p>Donation of ₦3,400</p> 
            </div>
              <input type="hidden" name="public_key" value="FLWPUBK_TEST-fa35fc033f99874e75ce5688e03cccb5-X" />
              <input type="hidden" name="customer[email]" value="jessepinkman@walterwhite.org" />
              <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
              <input type="hidden" name="tx_ref" value="bitethtx-019203" />
              <input type="hidden" name="amount" value="3400" />
              <input type="hidden" name="currency" value="NGN" />
              <input type="hidden" name="meta[token]" value="54" />
              <input type="hidden" name="redirect_url" value="http://localhost:3000/donate" />
            <button type="submit"  ><Button>Donate to Us</Button></button>
          </form>

          </Flex>
        </div>
      </div>
    </section>
  );
 
};

export default Section4;
