import facebook from "../assets/facebook-footer.png";
import instagram from "../assets/instagram-footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
      <section className='footer-container'>
        <h4 className='copyright'>
          © 2022 V NUMBER (88997654321) All rights reserved. | Privacy Policy
        </h4>
        <section className='social-links'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook' className='social-icon' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' className='social-icon' />
          </a>
        </section>
      </section>
    </div>
  );
}

export default Footer;
