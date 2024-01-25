import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { getAll } from "../../services/api/httprequest";
import { Link } from "react-router-dom";
import { Input, Button } from "@mui/material";
import { BasketItemContext } from "../../services/context/basketItemContextProvider";
import { WishlistItemContext } from "../../services/context/wishlistItemContextProvider";
import Swal from "sweetalert2";

const DynamicSection = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");
  const { addItem } = useContext(BasketItemContext);
  const { likeItem } = useContext(WishlistItemContext);

  const filteredData = meals
    .filter((meal) => meal.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (filter) {
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        case "Price":
          return a.price - b.price;
        default:
          return 0;
      }
    });

  useEffect(() => {
    async function fetchData() {
      const allMeals = await getAll();
      setMeals(allMeals);
    }
    fetchData();
  }, []);

  const handleAddToBasket = (meal) => {
    addItem(meal);
    Swal.fire({
      icon: "success",
      title: "Added to Basket!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleLikeItem = (meal) => {
    likeItem(meal);
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="menu">
      <MenuBookIcon />
      <h3>Our Menu</h3>

    <div>
    <Input
    placeholder="Search"
    style={{backgroundColor: "white", borderRadius: "6px", padding: "8px", margin: "10px"}}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <label> Sort: </label>
  <select style={{padding: "8px"}} value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value="Default">Default</option>
    <option value="A-Z">A-Z</option>
    <option value="Z-A">Z-A</option>
    <option value="Price">Price</option>
  </select>
    </div>

      <ul>
        <li>Breakfast</li>
        <li>Brunch</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>

      

      <div className="cardWrapper">
        {filteredData &&
          filteredData.map((meal) => {
            return (
                <div  key={meal._id}>
              <div className="card">
                <h4>
                  <Link to={`/${meal._id}`} style={{ color: "white" }}>
                    {meal.name}
                  </Link>
                </h4>
                <div className="cardDescr">
                  <p>{meal.description}</p>
                  <p>..................................</p>
                  <p>${meal.price}</p>
                  <div>
                    <Button
                      onClick={() => handleAddToBasket(meal)}
                      variant="outlined"
                    >
                      cart
                    </Button>
                    <Button
                      onClick={() => handleLikeItem(meal)}
                      variant="outlined"
                    >
                      like
                    </Button>
                  </div>
                </div>
              </div>
              
              </div>
             
            );
          })}
      </div>
      <button className="see" >See More</button>
    </div>
  );
};

export default DynamicSection;
