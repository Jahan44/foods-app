import React, { useCallback, useContext, useState } from "react";
import { Mycontex } from "../ContextHooks/Context";
import { SpinnerDotted } from "spinners-react";
import "./Home.scss";
const Home = () => {
  const [search, setSearch] = useState("");
  const [spiner, setSpiner] = useState(false);
  const { fetchHomeMeals, meals } = useContext(Mycontex);
  const SearchbtnHandle = useCallback(() => {
    setSpiner(!spiner);
    fetchHomeMeals(search);
    // setSpiner(false);
  }, [search, fetchHomeMeals]);

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
        ) : spiner ? (
          <div className="spiner-body">
            {" "}
            <SpinnerDotted enabled={spiner} />
          </div>
        ) : (
          <h1>No Meals. Please Enter Foot Name... </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
