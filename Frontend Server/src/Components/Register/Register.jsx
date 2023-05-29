import React from 'react';
import styles from './Register.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";

// import toast, { Toaster } from 'react-hot-toast';
export default function Register() {

  //NOTE - useNavigate initialization
  let navigate = useNavigate();


  //NOTE - yup initialization
  let mySchema = Yup.object({
    name: Yup.string().required('name is required').min(3, 'min chars are 3 ').max(20, 'max chars are 20'),
    email: Yup.string().email('').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}/, 'invalid password').required('password is required'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'passwords not matches'),
    phone: Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'invalid phone')
  });



  //NOTE - formik initialization 
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: ""
    },
    validationSchema: mySchema,
    onSubmit: handleLogin
  });


  //NOTE - handleLogin function
  function handleLogin(values) {

    console.log(formik.values);
    toastMessage(`Registration Succeeded 👍`)
    navigate('/Login')
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


  return (
    <>

      {/* //NOTE -Helmet  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registration</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>



      <div className=" container my-3">
        <div className="row">
          <div className={`${styles.card}  card text-white `}>

            <h2 className='text-white '>Register</h2>

            <form onSubmit={formik.handleSubmit} >
              <label htmlFor="name">Name:</label>
              <input type="text" id='name' className='form-control mb-2' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />

              {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : ''}

              <label htmlFor="Email">Email:</label>
              <input type="text" id='Email' className='form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ''}

              <label htmlFor="Password">Password:</label>
              <input type="Password" id='Password' className='form-control mb-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ''}

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="Password" id='confirmPassword' className='form-control mb-2' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />

              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="alert alert-danger">{formik.errors.confirmPassword}</div> : ''}

              <label htmlFor="phone">Phone:</label>
              <input type="tel" id='phone' className='form-control mb-2' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : ''}




              <button className='btn btn-success mb-3'>Register</button>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}
