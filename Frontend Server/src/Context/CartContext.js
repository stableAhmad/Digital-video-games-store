import { createContext, useState } from "react";
import axios from 'axios';




export const CartContext = createContext(0)


export default function CounterContextProvider(props) {

    const [cart, setCart] = useState(0)
    const [cartGames, setCartGames] = useState([])
    let [cartItemsCount, setCartItemsCount] = useState(0)
    const [gameData, setGameData] = useState([])
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

    return <CartContext.Provider value={{ cart, createCart, cartGames, setCartGames, cartItemsCount, countIncrease, countDecrease, gameData, getData }}>


        {props.children}
    </CartContext.Provider>
}