import React, { useCallback, useContext, useState } from "react";
import { Mycontex } from "../ContextHooks/Context";
import "./Home.scss";
const Home = () => {
  const [search, setSearch] = useState("");
  const { fetchHomeMeals, meals } = useContext(Mycontex);
  const SearchbtnHandle = useCallback(() => {
    fetchHomeMeals(search);
  }, [search, fetchHomeMeals]);
  console.log(meals[1]);
  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={SearchbtnHandle}>Search</button>
      </div>

      <div className="card-home">
        {meals?.length > 0 ? (
          meals?.map((meal) => {
            return (
              <div className="card-body">
                <div className="card" key={meals.idMeal}>
                  <img src={meal?.strMealThumb} alt="" />
                  <h2>Name:{meal?.strMeal}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <h1>no meals </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
