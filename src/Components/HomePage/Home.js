import React, { useCallback, useContext, useState } from "react";
import { Mycontex } from "../ContextHooks/Context";
import { SpinnerDotted } from "spinners-react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [search, setSearch] = useState("");
  const [spiner, setSpiner] = useState(false);

  const { fetchHomeMeals, meals } = useContext(Mycontex);

  const SearchbtnHandle = useCallback(() => {
    setSpiner(true);
    fetchHomeMeals(search);
    // setSpiner(false);
    setSearch("");
  }, [search, fetchHomeMeals]);

  // const test = (e) => {
  //   console.log(e.code, e.target.value);
  // };

  return (
    <div className="home">
      <div className="home-search">
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={SearchbtnHandle} id="myBtn">
          Search
        </button>
      </div>

      <div className="card-home">
        {meals?.length > 0 ? (
          meals?.map((meal) => {
            return (
              <div className="card-body" key={meal.idMeal}>
                <div className="card">
                  <img src={meal?.strMealThumb} alt="" />
                  <h2>Name:{meal?.strMeal}</h2>
                  <Link to={`home/${meal.idMeal}`}>Details</Link>
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
          <h1>No Meals. Please Enter Foot Name.... </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
