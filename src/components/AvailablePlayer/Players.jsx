import Cards from "../Cards/Cards";

const Players = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2> Available Players</h2>
        <div>
          <button className="bg-lime-400  border-2 border-red-100-100 px-3 py-2 ">
            Available
          </button>
          <button className="border">Selected</button>
        </div>
      </div>

      {/* available players cart */}
      <Cards></Cards>
    </div>
  );
};

export default Players;
