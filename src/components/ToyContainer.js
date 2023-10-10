import React from "react";
import ToyCard from "./ToyCard";




function ToyContainer({toyCardsFromApp}) {
  
  const renderCards = toyCardsFromApp.map((oneToy) => {

    return <ToyCard key={oneToy.id} name = {oneToy.name} image={oneToy.image} likes={oneToy.likes}/>;
  });


return (
  
  <div className ="toyContainer" >{renderCards}</div>

)
}

export default ToyContainer;
