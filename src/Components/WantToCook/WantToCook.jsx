

const WantToCook = ({wanttocook}) => {
    const {recipe_name,preparing_time,calories} =wanttocook;
    return (
        <table>
          <thead>
            <tr>
            <th>S.NO</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              
            </tr>
          </thead>
          <tbody>
              <tr>
              <td></td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
              </tr>
          </tbody>
        </table>
      );
};

export default WantToCook;