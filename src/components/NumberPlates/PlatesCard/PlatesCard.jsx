import React from "react";
import "./PlatesCard.scss";
import container from "../../assets/container.png";

function PlatesCard({ data }) {
  return (
    <div className='platesCard'>
      <section className='number-container'>
        <h3 className='number'>{data.number}</h3>
      </section>
      <section className='details-container'>
        <h5 className='series'>{data.series}</h5>
        <h4 className='price'>RM {data.price}</h4>
      </section>
    </div>
  );
}

export default PlatesCard;
