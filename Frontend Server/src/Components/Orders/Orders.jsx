import styles from './Orders.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Offline, Online } from "react-detect-offline";
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Replace 'faIconName' with the specific icon you want to use
import axios from 'axios';
export default function Orders() {

    let { userData } = useContext(CartContext);


    let [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/app1/get/relation/${userData}`).then((response) => {
            setOrders(response.data.orders);
            console.log(orders);
        });
    }, []);



    return (

        <>

            {/* //NOTE -Helmet  */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>orders🛒</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* //NOTE -Network Detect */}
            <Offline><div className={`${styles.Network} text-white rounded border m-3 p-2`}>offline</div></Offline>

            <h1 className="text-main text-center">ORDERS</h1>

            <div className="container">
                <div className="row">

                    {orders && orders.length > 0 ? (
                        <div className={`${styles.orders} col-12 text-white p-5`}>
                            {orders ? orders.map((game, index) => (
                                <div key={game.id} className="row border-bottom px-2 py-3">
                                    <div className="col-sm-4 col-md-2 col-lg-1">
                                        <img src={game.imageURL} alt="" className={`${styles.smallImg} w-100 rounded`} />
                                    </div>
                                    <div className="col-sm-8 col-md-10 col-lg-11 d-flex justify-content-between align-items-center ">
                                        <div>
                                            <h4>{game.title}</h4>
                                            <p className="text-success fs-4">{game.price}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="text-white mx-2 mb-0">{game.count}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                            )

                                : (
                                    <p>No items in the orders</p>
                                )}






                        </div>
                    ) : (
                        <h3 className='text-center'>No orders Found </h3>
                    )}

                </div>
            </div >
        </>
    );
}