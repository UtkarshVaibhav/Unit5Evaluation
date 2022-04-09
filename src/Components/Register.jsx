import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {isRegister} from '../Redux/action';
import styled from 'styled-components';
const StyledButton = styled.button`
display: ${({isRegisterStatus})=>isRegisterStatus?"block":"none"};
margin: 10px;
`
export const Register = () => {
  const [formDetails, setFormDetails] = useState({
    name:"",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description:""
  });
  const handleChange = (e) => {
    let {name, value, checked, type} = e.target;
    setFormDetails({...formDetails, 
        [name]: type === "checkbox" ? checked : value})
    }


const { name,email, password, username, mobile,description} = formDetails;
const {isRegisterStatus} = useSelector((state)=>state.loginReducer);
const dispatch = useDispatch();
const navigate=useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    setFormDetails({
      name:"",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description:""
    })
    fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
      method:"POST",
      body:JSON.stringify(formDetails),
      headers:{
          "content-type":"application/json"
      }
  })        
  .then((res)=>res.status)
  .then((res)=>
  {
    console.log(res);
    if(res===200)
    {
      alert("Register Successful");
      dispatch(isRegister(true));
    }
  })
  .catch((err)=>console.log(err))
}
// useEffect(()=>{

// })
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={name} /><br />
      <label>Email: </label>
      <input type="text" name="email" placeholder="Email" onChange={handleChange} value={email} /><br />
      <label>Password: </label>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} value={password} /><br />
      <label>Username: </label>
      <input type="text" name="username" placeholder="User Name" onChange={handleChange} value={username} /><br />
      <label>Mobile: </label>
      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} value={mobile} /><br />
      <label>Description: </label>
      <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description} /><br />
      <input type="submit" value="Submit" />
    </form>
    <StyledButton isRegisterStatus={isRegisterStatus} onClick={()=>navigate("/login")}>Redirect to Login Page</StyledButton>
    </>
  )
}
