import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './ProductDetails.module.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import axios from 'axios';

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



  const { cartItemsCount, setCartItemsCount } = useContext(CartContext);
  let { createCart, gameData, getData, userData } = useContext(CartContext)

  useEffect(() => {
    axios.get(`http://localhost:4000/app1/get/relation/${userData}`).then((response) => {

      setCartItemsCount(response.data.cart.length)
    });
  }, [cartItemsCount]);









  async function addGameToCart(game) {
    try {
      let response = await axios.post(`http://localhost:4000//app1/add/relation/cart/${userData}`, game);
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }










  // Get the id parameter from the URL using the useParams hook
  const { id } = useParams();
  console.log(id)
  //NOTE - Initialize useContext
  let [Id, setID] = useState('')
  // Find the game object with the matching id from the gamesList array
  console.log(gameData, "abdo  ");


  let gamesList = gameData.find((game) => game._id === id);
  console.log(gamesList, "--------------------------------");



  useEffect(() => {
    getData()

  }, [])

  return (
    <>
      <div className="container">

        <div className={`${Styles.ProductDetails} row p-4 rounded`} >
          <div className="row">
            <div className="col-md-6">
              <img src={gamesList.imageURL} alt={gamesList.title} className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-md-6">
              <h2 className="text-white">{gamesList.title}</h2>
              <h3 className=" text-main">{gamesList.price} {gamesList.currency}</h3>
              <p className="text-white">{gamesList.description}</p>
              <Button variant="" onClick={() => {
                handleGames(`${gamesList.title} added to cart`)
                createCart(gamesList.id)
                addGameToCart(gamesList)
              }}>Add to cart</Button>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-12">
              <h3 className=" text-main text-center mb-5">About The Game </h3>

              <table className='table w-50 mx-auto mb-5'>
                <tbody className='text-white fs-5 fw-bold'>
                  <tr>
                    <td className=''>DEVELOPER:</td>
                    <td>{gamesList.developer}</td>
                  </tr>

                  <tr>
                    <td className=''>Publisher:</td>
                    <td>{gamesList.publisher}</td>
                  </tr>


                  <tr>
                    <td className=''>EDITION:</td>
                    <td>{gamesList.edition}</td>
                  </tr>
                  <tr>
                    <td className=''>PLATFORM:</td>
                    <td>{gamesList.platform}</td>
                  </tr>



                  <tr>
                    <td className=''>GENRES:</td>
                    <td className=' text-main'>{gamesList['genres'].map((genre, index) => (
                      index === gamesList.genres.length - 1 ? genre : `${genre}, `

                    ))}</td>
                  </tr>



                  <tr>
                    <td className=''>LANGUAGES:</td>
                    <td className=' text-main'>{gamesList['languages'].map((language, index) => (
                      index === gamesList.languages.length - 1 ? language : `${language}, `

                    ))}</td>
                  </tr>
                </tbody>
              </table>


              <h3 className=" text-main  mb-5 text-center">Specifications </h3>



              <table className='table w-50 mx-auto mb-5'>
                <tbody className='text-white fs-5 fw-bold'>
                  <tr>
                    <td className=''>DEVELOPER:</td>
                    <td>{gamesList.developer}</td>
                  </tr>

                  <tr>
                    <td className=''>Publisher:</td>
                    <td>{gamesList.publisher}</td>
                  </tr>


                  <tr>
                    <td className=''>EDITION:</td>
                    <td>{gamesList.edition}</td>
                  </tr>
                  <tr>
                    <td className=''>PLATFORM:</td>
                    <td>{gamesList.platform}</td>
                  </tr>



                  <tr>
                    <td className=''>GENRES:</td>
                    <td className=' text-main'>{gamesList['genres'].map((genre, index) => (
                      index === gamesList.genres.length - 1 ? genre : `${genre}, `

                    ))}</td>
                  </tr>



                  <tr>
                    <td className=''>LANGUAGES:</td>
                    <td className=' text-main'>{gamesList['languages'].map((language, index) => (
                      index === gamesList.languages.length - 1 ? language : `${language}, `

                    ))}</td>
                  </tr>
                </tbody>
              </table>



              <div className="d-flex">

              </div>

            </div>
          </div>

        </div>


      </div >
    </>
  );
}

export default ProductDetails;