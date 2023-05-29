import React, { useEffect, useState, useContext } from "react";
import axios from "axios";


export default function Profile() {
    
    let [user, setUser] = useState({});
    let [userMail, setuserMail] = useState("");
     
    function getUserMail()
    {
        let userMail = localStorage.getItem('userToken');
        setuserMail(userMail);
    }

    async function getData() {
        let { data } = await axios.get(`http://localhost:4000/app2/${userMail}`)  
        setUser(data)
    }
     
     useEffect(() => { 
        getUserMail();
        getData(); 
     }, [])


    return (
        <>
        <div className="container mt-5">
            <div className="row text-white ml-3">                 
                <div className="col-8">  
                    <h1 className="text-">Welcome, {user.firstName}!</h1>
                    <div className="mt-4">
                        <div className="mb-2">
                            <strong>Your Name:</strong> {user.firstName} {user.lastName}
                        </div>     
                        <div className="mb-2">
                            <strong>Your Email:</strong> {user.email}
                        </div>
                        <div className="mb-2">
                        <strong>Your Region:</strong> {user.country}
                        </div>
                        <div className="mb-2">
                            <strong>Your Birthday:</strong> {user.dateOfBirth}
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <img className="w-75" src="https://cdn.discordapp.com/attachments/1109639593772454000/1112783058521837719/350458083_201244682861130_2040048640819639734_n.png" alt="img" />
                </div>
            </div>
        </div>
    </>
    );
}