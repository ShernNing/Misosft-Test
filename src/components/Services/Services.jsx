import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import "./Services.scss";

function Services() {
  return (
    <div id='services'>
      <section className='service-container'>
        <img src={service1} alt='service' className='service-item' />
        <img src={service2} alt='service' className='service-item' />
        <img src={service3} alt='service' className='service-item' />
      </section>
    </div>
  );
}

export default Services;
