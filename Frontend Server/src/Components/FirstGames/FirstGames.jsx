import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './FirstGames.module.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link, Navigate } from "react-router-dom";
import { gamesList } from '../Games/Games';
import { useNavigate } from 'react-router-dom';

//NOTE - useNavigate initialization

const handleGames = (msg) => {

  toastMessage(msg);
}



//NOTE - Display toastMessage
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




function Games() {
  let navigate = useNavigate();
  const NavigateToGames = () => {

    navigate('/games')
  }
  const gamesToDisplay = gamesList.slice(0, 4); // get the first 4 games

  return (
    <>
      <div className="container">
        <h1 className='text-white mb-5'>Explore</h1>
        <div className="row">
          {gamesToDisplay.map((game) => (
            <div key={game.id} className="h-100 col-sm-12 col-md-6 col-lg-3  mb-2 ">
              <Card className={` ${Styles.gamecard} overflow-hidden `} >
                <Link to={`/Product-details/${game.id}`} className='text-decoration-none'>
                  <Card.Img variant="top" className={`${Styles.img} `} style={{ height: '10rem', objectFit: 'cover' }} src={game.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title className='text-bold'><h6 className='text-main'>{game.title}</h6></Card.Title>
                  <Card.Title ><p>{game.price}</p></Card.Title>
                  <Button variant="" className={`btn ${Styles.Game} w-100`} onClick={() => {
                    handleGames(`${game.title} added to cart`)
                  }} >Add +</Button>
                </Card.Body>
              </Card>

            </div>
          ))}
          <button className="btn  w-100 mb-5" onClick={() => {
            NavigateToGames()
          }}>Show More +</button>
        </div>
      </div>
    </>
  );
}

export default Games;


