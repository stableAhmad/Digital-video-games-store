import { createContext, useState,useEffect } from "react";




export const CartContext = createContext(0)


export default function CounterContextProvider(props) {

    let [userData, setUserData] = useState(null);


  
  function saveUserData() {
    setUserData(localStorage.getItem("userToken"));
   console.log(userData);
  }
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, [saveUserData]);




    const [cart, setCart] = useState(0)
    const [cartGames, setCartGames] = useState([])
    let [cartItemsCount, setCartItemsCount] = useState(0)

    function createCart(id) {
        console.log("created", id);
    }

    function countIncrease() {
        setCartItemsCount(++cartItemsCount)
    }

    function countDecrease() {
        setCartItemsCount(--cartItemsCount)
    }

    return <CartContext.Provider value={{ cart, createCart, cartGames, setCartGames, cartItemsCount, countIncrease, countDecrease,userData,setUserData,saveUserData }}>


        {props.children}
    </CartContext.Provider>
}