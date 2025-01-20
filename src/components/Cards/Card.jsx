import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";

const Card = ({ player }) => {
  console.log(player);
  const { country, batting_style, player_role, price } = player;
  return (
    <div>
      <img
        src={player?.player_img}
        className="size-70 bg-cover w-full h-60"
        alt=""
      />
      <div>
        <FaUserLarge></FaUserLarge>
        <h1>{player?.name} </h1>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <FaFlag />
            <span>{country}</span>
          </div>
          <button className="bg-slate-400 px-4 py-2 rounded-lg">
            {player_role}
          </button>
        </div>
        <p>Rating</p>
        <div className="flex justify-between">
          <h3 className="font-bold">Bating-Style</h3>
          <span className="font-bold">{batting_style}</span>
        </div>
        <div className="flex justify-between">
          <h4>Price: {price}</h4>
          <button className="border-2 rounded-md p-3 border-gray-500">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
