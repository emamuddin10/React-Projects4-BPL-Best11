
import ChoosesPlayer from "../ChoosePlayer/ChoosesPlayer";


const Selected = ({chooses,setChooses}) => {
    
    const handleRemoveSelectedPlayer =(jersey_number)=>{
        // console.log(jersey_number,'removed')
        
        setChooses((prevData) => prevData.filter((item) => item.jersey_number !== jersey_number));
        


    }
    console.log(chooses)
    
    return (
        <div>
            <h3>choses items</h3>
            {
                chooses?.map((choose,idx) => (<ChoosesPlayer handleRemoveSelectedPlayer={handleRemoveSelectedPlayer} choose={choose}  key={idx} ></ChoosesPlayer>))
            }
        </div>
    );
};

export default Selected;