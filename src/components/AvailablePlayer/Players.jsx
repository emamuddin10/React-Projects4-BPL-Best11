import { useState } from "react";
import Cards from "../Cards/Cards";
// import { hydrateRoot } from "react-dom/client";
import Selected from "../Selected/Selected";
import toast, { Toaster } from "react-hot-toast";

const Players = ({money}) => {
   const [selected,setSelected]=useState(true)
   const [chooses,setChooses]=useState([])
   const [unique,setUnique]=useState([])
   console.log('chooses',chooses)
   console.log('unick',unique)

   
  
   const handleChoosePlayer = (selectedPlayer)=>{
     const uniquePlayer= chooses.includes(selectedPlayer)

     if(money <= 0){
      toast.error("you have not enough money")
    }
    else{
     if(!uniquePlayer){
      // chooses.push(selectedPlayer)
      if(chooses.length >5){
        return toast.error('You can not added more than 6 player')
      }

      toast.success('player added succesfuly')
      // console.log('added player',selectedPlayer)
      const newSelectedPlayers = [...chooses,selectedPlayer]
      setChooses(newSelectedPlayers)
    }else{
      return toast.error('this player already added')
    }
     

    }

     console.log('unick Player',uniquePlayer) 
   }
  return (
    <div>
      <div className="flex justify-between ">
        <h2> Available Players</h2>
        <div>
          <button onClick={()=>setSelected(true)}  className="bg-lime-400  border-2 border-red-100-100 rounded-md px-3 py-2 ">
            Available
          </button>
          <button onClick={()=>setSelected(false)} className="  border-2 border-orange-400 rounded-md px-3 py-2">Selected {chooses?.length} </button>
        </div>
      </div>

      {/* available players cart */}
       {
        selected ? <Cards handleChoosePlayer={handleChoosePlayer}></Cards> :<Selected setChooses={setChooses} chooses={chooses} setSelected={setSelected}></Selected>
       }
       <Toaster/>
    </div>
  );
};

export default Players;
