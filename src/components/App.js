import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const toyUrl = "http://localhost:3001/toys"
  const [toyCards, setToyCards] = useState([])
 
  const getToys = () => {
  fetch(toyUrl)
  .then((response) =>response.json())
  .then((toyData) => setToyCards(toyData));

};

  useEffect((getToys), [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyCardsFromApp={toyCards} />
    </>
  );
}

export default App;


//Draw out toy hierarchy

  //App
    //Header
      //Toy Form
    //Toy Container
      //Toy Card => fetch for toy data array here.


//When our application loads, make a GET request to /toys to fetch the toy array. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard components on the page.
  //Call to the server to fetch the toy data. 
  //pass down the data as props to card container, then toy card.

  // When the ToyForm is submitted, make a POST request to /toys to save a new toy to the server. Using the ideas of controlled form and inverse data flow, think about how to render a new ToyCard for the toy that you created.
  
  //When the like button is clicked, make a PATCH request to /toys/:id with the id of the toy that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the toy on the server. Clicking on the button should also increase the number of likes on the DOM.