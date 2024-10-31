const Recipe = ({ recipe, handleAssToWantToCooks }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    recipe_image,
    preparing_time,
    calories,
  } = recipe;
  return (
   <div>
     <div className=" bg-[#FFF] p-5 border border-[#28282833] rounded-lg ">
        
        <div className="mb-20 space-y-4 ">
          <img
            className="w-full mb-8 rounded-lg"
            src={recipe_image}
            alt={`cover pictur of the titel ${recipe_name}`}
          />
          <h3 className="font-bold">{recipe_name}</h3>
          <p> {short_description}</p>
          <h3> <span className="font-medium">Ingredients :</span> {
          ingredients.map(( hash , idx) => <span key={idx}><li>Ingredients{hash}</li></span>)
          }</h3>
          <div>
            <p>{preparing_time}</p>
            <p>{calories}</p>
          </div>
          <button
            onClick={() => handleAssToWantToCooks(recipe)}
            className="btn btn-primary"
          >
            Want to cook
          </button>
        </div>
      </div>
   </div>
  );
};

export default Recipe;
