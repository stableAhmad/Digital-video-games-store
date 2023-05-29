import React from 'react'
import GameSlider from '../GameSlider/GameSlider'
import Games from '../Games/Games'
import FirstGames from '../FirstGames/FirstGames'
import { Offline, Online } from "react-detect-offline";
import styles from '../Home/Home.module.css';

export default function Home() {
  return (
    <>
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