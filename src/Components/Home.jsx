import React from 'react'
import {useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
export const Home = () => {
  const {isLoginStatus} = useSelector((state)=>state.loginReducer);
  if(!isLoginStatus)
  {
      return <Navigate to="/login"/>
  }
  return (
    <div>Home</div>
  )
}
