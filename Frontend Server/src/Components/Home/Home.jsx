import React, { useEffect, useContext } from 'react'
import GameSlider from '../GameSlider/GameSlider'
import Games from '../Games/Games'
import FirstGames from '../FirstGames/FirstGames'
import { Offline, Online } from "react-detect-offline";
import styles from '../Home/Home.module.css';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';

export default function Home() {

  const { cartGames, userData, gameData, cartList, displayCart, setCartGames, countDecrease, cartItemsCount, setCartItemsCount } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:4000/app1/get/relation/${userData}`).then((response) => {

      setCartItemsCount(response.data.cart.length)
    });
  }, [cartItemsCount]);







  return (
    <>
      {/* //NOTE -Helmet  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME🏡</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>



      <div className="container">
        <div className="mb-5">
          <Offline><div className={`${styles.Network} text-white rounded border m-3 p-2`}>offline</div></Offline>

          <GameSlider />
        </div>
        <div className="mb-2">
          <FirstGames />
        </div>


      </div>
    </>
  )
}