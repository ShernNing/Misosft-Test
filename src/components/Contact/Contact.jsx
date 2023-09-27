import "./Contact.scss";
import contact from "../assets/contact.png";
import whatsapp from "../assets/whatsapp.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";

function Contact() {
  return (
    <section id='contact'>
      <section className='contact-container'>
        <h2>GET IN TOUCH</h2>
        <h4>
          Thank you for your interest in V Number. If you have any enquiries,
          welcome to contact us!
        </h4>
        <section className='section-details'>
          <img src={location} alt='location' />
          <h3>
            Menara The Stride, Bukit Bintang City Centre, No. 2, Jalan Hang
            Tuah, 55100 Kuala Lumpur.
          </h3>
        </section>
        <section className='section-details'>
          <img src={phone} alt='phone' />
          <h3>+6 011 8888 6999</h3>
        </section>
        <section className='section-details'>
          <img src={phone} alt='phone' className='email' />
          <h3>interest@vnumber.com</h3>
        </section>
      </section>
      <a
        href='https://wa.me/+60123456789'
        target='_blank'
        rel='noreferrer'
        className='whatsapp-container'
      >
        <img src={whatsapp} alt='whatsapp' className='whatsapp' />
      </a>
    </section>
  );
}

export default Contact;
