import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import styles from '../cart/cart.module.css';

export default function Cart() {
  const { cartGames, setCartGames, countDecrease } = useContext(CartContext);

  const handleIncrement = (index) => {
    const updatedCartGames = [...cartGames];
    updatedCartGames[index].count += 1;


    setCartGames(updatedCartGames);
  };

  const handleDecrement = (index) => {
    const updatedCartGames = [...cartGames];

    if (updatedCartGames[index].count === 1) {
      updatedCartGames.splice(index, 1)
      countDecrease()
      setCartGames(updatedCartGames);
    }
    else {
      updatedCartGames[index].count -= 1;
      setCartGames(updatedCartGames);
    }



  };

  return (
    <>
      <h1 className="text-white">Cart</h1>

      <div className="container">
        <div className="row">
          <div className={`${styles.Cart} col-12 text-white p-5`}>
            {cartGames.map((game, index) => (
              <div key={game.id} className="row border-bottom px-2 py-3">
                <div className="col-sm-4 col-md-2 col-lg-1">
                  <img src={game.imageUrl} alt="" className={`${styles.smallImg} w-100`} />
                </div>
                <div className="col-sm-8 col-md-10 col-lg-11 d-flex justify-content-between align-items-center">
                  <div>
                    <h4>{game.title}</h4>
                    <p className="text-success fs-4">{game.price}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-success mx-1"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                    <p className="text-white mx-2 mb-0">{game.count}</p>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
