import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";

// import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

  let navigate = useNavigate();

  //Validation using Yup
  let validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string().required("password is required").matches(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "password is inValid"),

  })


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

  function handleLogin(values) {

    console.log(formik.values);
    navigate('/')
    toastMessage(`Login Succeeded 👍`)
  }


  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    // validate,
    validationSchema,
    onSubmit: handleLogin

  })




  return <>

    {/* //NOTE -Helmet  */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>LOGIN</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>



    <div className=" container my-3 ">
      <div className="row">
        <div className={`${styles.card}  card text-white `}>
          <h2>Login :</h2>

          <form onSubmit={formik.handleSubmit} >

            <label htmlFor="Email">Email:</label>
            <input type="text" id='Email' className='form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ''}

            <label htmlFor="Password">Password:</label>
            <input type="Password" id='Password' className='form-control mb-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ''}

            <button className='btn btn-success mb-3'>Login</button>

          </form>

        </div>
      </div>
    </div>

  </>

}
