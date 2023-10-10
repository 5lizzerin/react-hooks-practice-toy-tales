import React, {useState} from "react";

function ToyCard(toy) {
  const [likeButton, setLikes] = useState(toy.likes)
  const handleLikeClick = () => {
    setLikes(likeButton + 1);
    // console.log("Like button was clicked")
  }

  const [goodWillButton, setGoodWillButton] = useState(false)
  const handleGoodWillButton = () => {
    fetch(`http://localhost:3001/toys${toy.id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => console.log("deleted"))
    // console.log("GW button was clicked!")
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes}{likeButton} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleGoodWillButton}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
