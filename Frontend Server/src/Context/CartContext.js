import { createContext, useEffect, useState } from "react";
import axios from 'axios';




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
    const [gameData, setGameData] = useState([])
    let [cartList, setCartList] = useState([])
    async function getData() {
        let { data } = await axios.get("http://localhost:4000/app1/get/all/full")
        console.log(data);
        setGameData(data)
    }
    function createCart(id) {
        console.log("created", id);
    }

    function countIncrease() {
        setCartItemsCount(++cartItemsCount)
    }

    function countDecrease() {
        setCartItemsCount(--cartItemsCount)
    }

    let array = []
    async function displayCart() {
        let data = await axios.get(`http://localhost:4000/app1/get/relation/${userData}`).then(
            array = data.data.cart,
            setCartList(array),
            console.log(data)
        )

    }



  

    return <CartContext.Provider value={{ cart, createCart, cartGames, setCartGames, cartItemsCount, countIncrease, countDecrease, userData, setUserData, saveUserData, gameData, getData, cartList, displayCart,setCartGames }}>


        {props.children}
    </CartContext.Provider>
}