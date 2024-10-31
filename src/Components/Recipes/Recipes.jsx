import { useEffect, useState } from "react";

const Recipes = () => {
   const [recipes,setRecipes] = useState ([]);

   useEffect (() => {
    fetch("recipe.json")
    .then(res => res.json())
    .then((data)=>setRecipes(data));
   },[])
    return (
        <div>
            <h3>
                <h3>Recipe : {recipes.length}</h3>
               
            </h3>
            
        </div>
    );
};

export default Recipes;