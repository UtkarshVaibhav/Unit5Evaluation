import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {isLogin} from '../Redux/action';
export const Login = () => {
  const navigate=useNavigate();
    const [formDetails, setFormDetails] = useState({
      username: "",
      password: "",
    });
    const handleChange = (e) => {
      let {name, value, checked, type} = e.target;
      setFormDetails({...formDetails, 
          [name]: type === "checkbox" ? checked : value})
      }
  const { password, username} = formDetails;
  const {isLoginStatus} = useSelector((state)=>state.loginReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method:"POST",
        body:JSON.stringify(formDetails),
        headers:{
            "content-type":"application/json"
        }
    })        
    .then((res)=>{
      if(res.status===200)
      {
        dispatch(isLogin(true));
        alert("Click to re-direct");
        navigate("/");
      }
    })
    .catch((err)=>{dispatch(isLogin(false)); alert("Failed!  Register First..... ")})
      setFormDetails({
        name:"",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description:""
      })
  }
  if(isLoginStatus)
  return(<h1> Already Logged In ...... </h1>);
  return (
<form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} value={username} /><br />
      <label>Password: </label>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} value={password} /><br />
      <input type="submit" value="Submit" />
    </form>
  )
}
