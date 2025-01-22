import { useState } from "react";
import Cards from "../Cards/Cards";
// import { hydrateRoot } from "react-dom/client";
import Selected from "../Selected/Selected";
import toast, { Toaster } from "react-hot-toast";

const Players = ({money}) => {
   const [selected,setSelected]=useState(true)
   const [chooses,setChooses]=useState([])
   const [unique,setUnique]=useState([])
   console.log(chooses)
   
  
   const handleChoosePlayer = (selectedPlayer)=>{
     const uniquePlayer= unique.includes(selectedPlayer)

     if(!uniquePlayer){
       unique.push(selectedPlayer)
     }else{
       return toast.error('this player already added')
     }
     console.log(output)
    
    if(money <= 0){
      toast.error("you have not enough money")
    }
    else{
      toast.success('player added succesfuly')
      console.log('added player',selectedPlayer)
      const newSelectedPlayers = [...chooses,selectedPlayer]
      setChooses(newSelectedPlayers)

    }
    


   }
  return (
    <div>
      <div className="flex justify-between ">
        <h2> Available Players</h2>
        <div>
          <button onClick={()=>setSelected(true)}  className="bg-lime-400  border-2 border-red-100-100 rounded-md px-3 py-2 ">
            Available
          </button>
          <button onClick={()=>setSelected(false)} className="  border-2 border-orange-400 rounded-md px-3 py-2">Selected</button>
        </div>
      </div>

      {/* available players cart */}
       {
        selected ? <Cards handleChoosePlayer={handleChoosePlayer}></Cards> :<Selected setChooses={setChooses} chooses={chooses}></Selected>
       }
       <Toaster/>
    </div>
  );
};

export default Players;
