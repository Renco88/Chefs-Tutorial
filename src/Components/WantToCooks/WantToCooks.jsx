import WantToCook from "../WantToCook/WantToCook";
const WantToCooks = ({wantToCooks}) => {
    return (
        <div> 
            <h3 className="w-1/3">
            wantToCooks:{wantToCooks.length}
            </h3>

          {
            wantToCooks.map((wanttocook,idx) => <WantToCook key={idx} wanttocook={wanttocook}></WantToCook>)
          }  
            
        </div>
    );
};

export default WantToCooks;