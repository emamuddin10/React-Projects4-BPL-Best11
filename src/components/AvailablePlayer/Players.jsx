import { useState } from "react";
import Cards from "../Cards/Cards";
// import { hydrateRoot } from "react-dom/client";
import Selected from "../Selected/Selected";

const Players = () => {
   const [selected,setSelected]=useState(true)
   const [chooses,setChooses]=useState([])
   console.log(chooses)
   

   const handleChoosePlayer = (selectedPlayer)=>{
    console.log('added player',selectedPlayer)
    const newSelectedPlayers = [...chooses,selectedPlayer]
    setChooses(newSelectedPlayers)
    


   }
  return (
    <div>
      <div className="flex justify-between ">
        <h2> Available Players</h2>
        <div>
          <button onClick={()=>setSelected(true)}  className="bg-lime-400  border-2 border-red-100-100 px-3 py-2 ">
            Available
          </button>
          <button onClick={()=>setSelected(false)} className="border">Selected</button>
        </div>
      </div>

      {/* available players cart */}
       {
        selected ? <Cards handleChoosePlayer={handleChoosePlayer}></Cards> :<Selected chooses={chooses}></Selected>
       }
    </div>
  );
};

export default Players;
