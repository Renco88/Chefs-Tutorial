import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleAssToWantToCooks}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="w-2/3">
      <h3>
        <h3>Recipe : {recipes.length}</h3>
        {
            recipes.map((recipe,idx)=>(<Recipe key={idx} recipe={recipe} handleAssToWantToCooks={handleAssToWantToCooks} ></Recipe>))
        }
     
      </h3>
    </div>
  );
};

export default Recipes;
