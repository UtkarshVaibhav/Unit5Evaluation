import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { isLogin } from '../Redux/action';
const NavBarDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
padding: 30px;
border-bottom: 2px solid black;
margin-bottom: 30px;
position: relative;
`
const StyledLinks=styled(Link)`
text-decoration: none;
margin: 10px;
&:hover{
    text-decoration: underline;
}
`
const StyledButton= styled.button`
    position: absolute;
    right: 50px;
    display: ${({isLoginStatus})=> isLoginStatus?"block":"none"};
`
export const Navbar = () => {
  const {isLoginStatus} = useSelector((state)=>state.loginReducer);
  const dispatch = useDispatch();
  return (
    <NavBarDiv>
        <StyledLinks to="/">Home</StyledLinks>
        <StyledLinks to="/register">Register</StyledLinks>
        <StyledLinks to="/login">Login</StyledLinks>
        <StyledLinks to="/employees">Employees</StyledLinks>
        <StyledButton isLoginStatus={isLoginStatus} onClick={()=>dispatch(isLogin(false))}>Logout</StyledButton>
        {/* <StyledLinks to="/employees/create">Create Employees</StyledLinks> */}
    </NavBarDiv>
  )
}
