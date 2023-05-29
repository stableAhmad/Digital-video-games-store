import { createContext, useState } from "react";




export const CartContext = createContext(0)


export default function CounterContextProvider(props) {

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

    return <CartContext.Provider value={{ cart, createCart, cartGames, setCartGames, cartItemsCount, countIncrease, countDecrease }}>


        {props.children}
    </CartContext.Provider>
}