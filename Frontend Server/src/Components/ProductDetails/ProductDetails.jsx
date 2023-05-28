import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './ProductDetails.module.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { gamesList } from '../Games/Games';

// display a toast message when the user clicks on the Add to cart button
const handleGames = (msg) => {
  toastMessage(msg);
}

// Function to display a success toast message
const toastMessage = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide
  });
}

function ProductDetails() {
  // Get the id parameter from the URL using the useParams hook
  const { id } = useParams();
  console.log(id)
  // Find the game object with the matching id from the gamesList array
  const game = gamesList.find((game) => game.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={game.imageUrl} alt={game.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="text-white">{game.title}</h1>
            <h2 className="text-white">{game.price}</h2>
            <p className="text-white">{game.description}</p>
            <Button variant="primary" onClick={() => handleGames(`${game.title} added to cart`)}>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;