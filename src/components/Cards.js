import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check the Epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden caves"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Travel through desert"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Paradise islands"
              label="Leisure"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Sunrise in mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="A taste of Tokyo"
              label="City Break"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
