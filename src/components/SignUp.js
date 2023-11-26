import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SignUp = ({setIsLoggedIn}) => {

  const Navigate=useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  

  const [pass, setpass] = useState(false);
  const [pass1, setpass1] = useState(false);

  function changeHandler(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }


  let arr=[];
  function submitHandler(event){
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Createed!");
    const accountData={
      ...formData
    }
    arr.unshift(formData);
    console.log("Printing account data");
    console.log(arr);
    Navigate("/DashBoard");

  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}> 
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter Your First Name'
              value={formData.firstName}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter Your Last Name'
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Your Email Address'
            value={formData.email}
          />
        </label>


        <label>
          <p>Create Password</p>
          <input
            type={pass ? ('text') : ('password')}
            name='password'
            value={formData.password}
            placeholder='Enter Your Password'
            required
            onChange={changeHandler}
          />
          <span onClick={() =>setpass((prev) => !prev)}>
            {pass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
          </span>
        </label>

        <label>
          <p>Confirm Password</p>
          <input
            type={pass1 ? ('text') : ('password')}
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder='Enter Your Password'
            required
            onChange={changeHandler}
          />
          <span onClick={() =>setpass1((prev) => !prev)}>
            {pass1 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
          </span>
        </label>

        <button>
          Create Account
        </button>

      </form>
    </div>
  )
}
export default SignUp