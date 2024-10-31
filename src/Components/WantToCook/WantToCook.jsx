const WantToCook = ({ wanttocook, idx }) => {
    const { recipe_name, preparing_time, calories } = wanttocook;
    return (
      <table className="bg-white border border-gray-300 w-full rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2"></th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Time</th>
            <th className="p-2 text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">{idx + 1}.</td>
            <td className="p-2">{recipe_name}</td>
            <td className="p-2">{preparing_time}</td>
            <td className="p-2">{calories}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default WantToCook;
  