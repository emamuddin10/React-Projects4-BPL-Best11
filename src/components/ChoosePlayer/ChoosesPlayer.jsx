import { MdDeleteForever } from "react-icons/md";

const ChoosesPlayer = ({ choose,handleRemoveSelectedPlayer }) => {
  const { name,price, batting_style, jersey_number, player_img } = choose;
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div>
          <img className="w-32" src={player_img} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{batting_style}</p>
          <p>Price:{price}</p>
        </div>
      </div>
      <div>
         <button onClick={()=>handleRemoveSelectedPlayer(jersey_number)} className="w-40"><MdDeleteForever /></button>
      </div>
    </div>
  );
};

export default ChoosesPlayer;
