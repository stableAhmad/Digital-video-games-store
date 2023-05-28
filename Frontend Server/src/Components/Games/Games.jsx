import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './Games.module.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';


export const gamesList = [
  {
    id: 1,
    title: 'Little Nightmare 2',
    price: '69$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qI1YxMtvlviq6RXG9qXl4C20gGRmxgMsXNiWvpD8rpWwplGcBZnp9Pij1MBpb5UqAg9TfltY6_Kb54moWn0KLAewG5Gw=w1920-h937',
    count: 1
  },
  {
    id: 2,
    title: 'Fortnite',
    price: '100$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission ',
    imageUrl: 'https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3797878-little-nightmares-ii.jpg',
    count: 1
  },
  {
    id: 3,
    title: 'FIFA 23',
    price: '25$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c',
    count: 1
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg',
    count: 1
  },
  {
    id: 5,
    title: 'Grand Theft Auto V',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', count: 1

  },
  {
    id: 6,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 7,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 8,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 9,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 10,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 11,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 12,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 13,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
  {
    id: 14,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', count: 1
  },
];



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
  const [titleFilter, setTitleFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });

  var count = 0
  let { createCart, cartGames, countIncrease } = useContext(CartContext)




  return (
    <>
      <div className="container">
        <h1 className='text-white mb-5'>Our Games</h1>

        <div className="row">

          <div className={`${Styles.serachBox} rounded row p-4 m-5`}>



            <div className="col-12 mb-3">
              <input type="text" className="form-control" placeholder="Search games by title..." value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
            </div>
            <div className="col-6 mb-3">
              <input type="number" className="form-control" placeholder="Minimum price" value={priceFilter.min} onChange={(e) => setPriceFilter({ ...priceFilter, min: e.target.value })} />
            </div>
            <div className="col-6 mb-3">
              <input type="number" className="form-control" placeholder="Maximum price" value={priceFilter.max} onChange={(e) => setPriceFilter({ ...priceFilter, max: e.target.value })} />
            </div>
          </div>

          {gamesList.filter(game => game.title.toLowerCase().includes(titleFilter.toLowerCase())
            && ((priceFilter.min === '' || parseFloat(game.price) >= parseFloat(priceFilter.min))
              && (priceFilter.max === '' || parseFloat(game.price) <= parseFloat(priceFilter.max)))).map((game) => (
                <div key={game.id} className="h-100 col-sm-12 col-md-6 col-lg-3  mb-2 ">
                  <Card className={` ${Styles.gamecard} overflow-hidden `} >
                    <Link to={`/Product-details/${game.id}`} className='text-decoration-none'>
                      <Card.Img variant="top" className={`${Styles.img} `} style={{ height: '10rem', objectFit: 'cover' }} src={game.imageUrl} />
                    </Link>
                    <Card.Body>
                      <Card.Title className='text-bold'><h6 className='text-main'>{game.title}</h6></Card.Title>
                      <Card.Title ><p>{game.price}</p></Card.Title>
                      <Button
                        variant=""
                        className={`btn ${Styles.Game} w-100`}
                        onClick={() => {
                          handleGames(`${game.title} added to cart`);
                          createCart(game.id);

                          const existingGame = cartGames.find((cartGame) => cartGame.id === game.id);
                          if (existingGame) {
                            // If the game already exists in the cart, update its count
                            existingGame.count += 1;
                          } else {
                            // If the game doesn't exist in the cart, add it
                            countIncrease()
                            cartGames.push(game);
                          }

                          console.log(cartGames);
                        }}
                      >
                        Add +
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </div>
      </div >
    </>
  );
}

export default Games;


// information
// note- update password button
// note- delete account button
//  orders
// note- wishlist
