import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from 'react-toastify';



export default function Profile() {
  let navigate = useNavigate();
  let { userData } = useContext(CartContext);
  let [user, setUser] = useState({});
  let [newEmail, setNewEmail] = useState("");
  let [isEditing, setIsEditing] = useState(false);


  let { saveUserData } = useContext(CartContext);
    // Function to handle user logout
    function handleLogout() {
      // Remove the user token from the local storage
      localStorage.removeItem('userToken');
      // Clear the user data in the CartContext
      saveUserData(null);
      // Navigate to the Login page
      navigate('/Login');
    }


    //NOTE - Display toastMessage
  const toastMessage = (msg) => {
    toast.success(msg, {
      position: "top-center",
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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/app2/${userData}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

 // useEffect(() => {}, [user]);

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewEmail("");
  };

  const handleSaveClick = () => {
    axios
      .put(`http://localhost:4000/app2/${user.email}`, { email: newEmail })
      .then((response) => {
        setUser(response.data);
        setIsEditing(false);
        setNewEmail("");
        handleLogout();
        toastMessage(`Email Changed succesfully 👍`)
      });
  };

  return (
    <>
       <div className="container mt-5 text-white">
      <div className="row text-white ml-3">
        <div className="col-md-12">
          <h2>User Profile</h2>
          <table className="table  text-white">
            <tbody>
              <tr>
                <td>Username:</td>
                <td>{user.firstName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={user.email}
                        value={newEmail}
                        onChange={handleEmailChange}
                      />
                      <button className="btn btn-sm btn-success ml-2" onClick={handleSaveClick} >
                        Save
                      </button>
                      <button className="btn btn-sm btn-secondary ml-2" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </>
                  ) : ( 
                    <>
                      {user.email}
                      <button className="btn btn-sm btn-primary ml-2" onClick={handleEditClick}>
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{user.country}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{user.dateOfBirth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 </> );
}