
import React from 'react'
import GameSlider from '../GameSlider/GameSlider'
import Games from '../Games/Games'


export default function Home() {
  return (
    <>
    <div className="container">
      <div className="mb-5">
<GameSlider />
      </div>
      <div className="mb-2">
          <Games />
        </div>
    
  
    </div>
    </>
  )
}
