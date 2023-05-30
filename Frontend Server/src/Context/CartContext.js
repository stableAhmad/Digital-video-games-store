import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const CartContext = createContext(0);

export default function CounterContextProvider(props) {
    let [userData, setUserData] = useState(localStorage.getItem("userToken"));

    function saveUserData() {
        const userToken = localStorage.getItem("userToken");
        setUserData(userToken);
        console.log(userToken);
    }

    const [cart, setCart] = useState(0);
    const [cartGames, setCartGames] = useState([]);
    let [cartItemsCount, setCartItemsCount] = useState(0);
    const [gameData, setGameData] = useState([]);
    const [cartList, setCartList] = useState([]);

    async function getData() {
        let { data } = await axios.get("http://localhost:4000/app1/get/all/full");
        console.log(data);
        setGameData(data);
    }

    function createCart(id) {
        console.log("created", id);
    }

    function countIncrease() {
        setCartItemsCount((prevCount) => prevCount + 1);
    }

    function countDecrease() {
        setCartItemsCount((prevCount) => prevCount - 1);
    }

    useEffect(() => {
        console.log('ehabtarekhelmhy');
        saveUserData();
        // getCart();
    }, []);



    // async function getCart() {

    //     let response = await displayCart();
    //     console.log(response);
    //     console.log(response.data.cart);
    //     if (response?.data?.status === 200) {
    //         let tall = response?.data?.cart.length;
    //         console.log(tall);
    //         setCartItemsCount(tall);
    //     }
    // }

    // async function displayCart() {
    //     console.log(userData);
    //     return axios
    //         .get(`http://localhost:4000/app1/get/relation/${userData}`)
    //         .then((response) => response)
    //         .catch((error) => error);
    // }


    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <CartContext.Provider
            value={{
                cart,
                createCart,
                cartGames,
                setCartGames,
                cartItemsCount,
                countIncrease,
                countDecrease,
                userData,
                setUserData,
                saveUserData,
                gameData,
                getData,
                cartList,
                setCartGames,
                setCartItemsCount,
                cartItemsCount,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}
