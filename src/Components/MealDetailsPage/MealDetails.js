import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MealDetails.scss";
const MealDetails = () => {
  const { mealsId } = useParams();
  const [mealDetail, setMealDetail] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`)
      .then((res) => res.json())
      .then((data) => setMealDetail(data.meals));
  }, [mealsId]);
  console.log(mealDetail);
  return (
    <div className="meal-details">
      <h2>
        Your Selected Meal <span>Details</span>
      </h2>
      {mealDetail?.map((meal) => {
        return (
          <div className="details-card" key={meal.idMeal}>
            <div className="details-image-body">
              <img src={meal.strMealThumb} alt="meals-img" />
              <h2>Name:{meal.strMeal}</h2>
            </div>
            <div className="details-text">
              <p>{meal.strInstructions}</p>
            </div>
            <div className="youtubeLink">
              <a href={meal.strYoutube}>Video</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MealDetails;
