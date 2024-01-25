import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import CakeIcon from "@mui/icons-material/Cake";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const Service = () => {
  return (
    <div className="service">
      <RestaurantIcon />
      <h1>Our Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="cart">
              <EmojiFoodBeverageIcon />
              <h1>Breakfast</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus fugit maxime quae eveniet, perspiciatis mollitia!
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="cart">
              <CakeIcon />
              <h1>Brunch</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus fugit maxime quae eveniet, perspiciatis mollitia!
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="cart">
              <DinnerDiningIcon />
              <h1>Lunch</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus fugit maxime quae eveniet, perspiciatis mollitia!
              </p>
            </div>
          </div> 
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="cart">
              <LunchDiningIcon />
              <h1>Dinner</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus fugit maxime quae eveniet, perspiciatis mollitia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
