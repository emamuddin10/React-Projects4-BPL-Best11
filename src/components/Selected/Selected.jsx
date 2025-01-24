
import ChoosesPlayer from "../ChoosePlayer/ChoosesPlayer";


const Selected = ({chooses,setChooses,setSelected}) => {
    
    const handleRemoveSelectedPlayer =(jersey_number)=>{
        // console.log(jersey_number,'removed')
        
        setChooses((prevData) => prevData.filter((item) => item.jersey_number !== jersey_number));
    }
    console.log(chooses)
    
    return (
        <div>
            <h3>choses items</h3>
            <div>
            {
                chooses?.map((choose,idx) => (<ChoosesPlayer handleRemoveSelectedPlayer={handleRemoveSelectedPlayer} choose={choose}  key={idx} ></ChoosesPlayer>))
            }
            </div>

         <button onClick={()=>setSelected(true)} className="mt-6  border-2 border-orange-400 rounded-md px-3 py-2">Add Player</button>
        </div>
    );
};

export default Selected;