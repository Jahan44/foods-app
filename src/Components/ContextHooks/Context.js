import { createContext, useCallback, useState } from "react";
import axios from "axios";
export const Mycontex = createContext();
export const Context = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const fetchHomeMeals = useCallback((searchName) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
      .then((res) => setMeals(res.data.meals));
  }, []);
  return (
    <Mycontex.Provider value={{ fetchHomeMeals, meals }}>
      {children}
    </Mycontex.Provider>
  );
};
