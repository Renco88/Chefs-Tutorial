import WantToCook from "../WantToCook/WantToCook";
const WantToCooks = ({ wantToCooks }) => {
  return (
    <div className=" mt-16">
      <h3 className="w-full flex justify-center items-center py-5 font-bold bg-[#FFF] border border-[#28282833]  ">
        Want To Cooks : {wantToCooks.length}
      </h3>

      <div className="">
        {wantToCooks.map((wanttocook, idx) => (
          <WantToCook key={idx} idx={idx} wanttocook={wanttocook}></WantToCook>
        ))}
      </div>
    </div>
  );
};

export default WantToCooks;
