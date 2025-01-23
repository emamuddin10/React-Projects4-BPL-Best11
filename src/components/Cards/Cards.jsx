import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = ({handleChoosePlayer}) => {
   const [players,setPlayers] = useState();

   useEffect(()=>{
     fetch('player.json')
     .then(res=>res.json())
     .then(data=> setPlayers(data))

   },[])

  return ( 
    
    <div >
     
      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {
            players?.map(player=>(<Card key={player?.jersey_number} player={player} handleChoosePlayer={handleChoosePlayer}></Card>))
         }
      </div>

    </div>
    
  );
};

export default Cards;
