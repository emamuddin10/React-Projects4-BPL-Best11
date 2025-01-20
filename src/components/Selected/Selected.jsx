

const Selected = ({chooses}) => {
    console.log(chooses)
    
    return (
        <div>
            <h3>choses items</h3>
           {/* {chooses} */}
           {/* {
            chooses?.map(item=>(
             <div key={item.jersey_number}>
                <img src='' alt="" />
             </div>
             ))
           } */}
        </div>
    );
};

export default Selected;