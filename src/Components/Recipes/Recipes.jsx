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
    <div className="w-2/3 m-5">
   
        <h3 className="text-3xl font-bold flex justify-center items-center mb-5">Recipe : {recipes.length}</h3>

       <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  ">
       {
            recipes.map((recipe,idx)=>(<Recipe key={idx} recipe={recipe} handleAssToWantToCooks={handleAssToWantToCooks} ></Recipe>))
        }
     
       </div>
     
    </div>
  );
};

export default Recipes;
