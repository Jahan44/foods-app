import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListFood.scss";
const ListFood = () => {
  const [list, setList] = useState([]);
  const { food } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`)
      .then((res) => res.json())
      .then((data) => setList(data.meals));
  }, [food]);
  return (
    <div className="list-body">
      <h2>
        {" "}
        The Bast <span>Foods</span>
      </h2>
      <div className="list-meals-body">
        {list?.map((meals) => {
          return (
            <div className="cart-list-item">
              <div className="list-item-img">
                <img src={meals.strMealThumb} alt="" />
                <h2> {meals.strMeal}</h2>
                <a href={meals.strSource}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListFood;
