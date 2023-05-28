import React from 'react'
import GameSlider from '../GameSlider/GameSlider'
import Games from '../Games/Games'
import FirstGames from '../FirstGames/FirstGames'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="mb-5">
          <GameSlider />
        </div>
        <div className="mb-2">
          <FirstGames />
        </div>


      </div>
    </>
  )
}