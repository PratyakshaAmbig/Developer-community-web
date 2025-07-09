import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState('pratyakshaambig@gmail.com');
  const [password, setPassword] = useState('Prat@1015');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async()=>{
    try {
      const res = await axios.post(`${BASE_URL}/login`,{
        emailId,password
      },{withCredentials:true})
      // first dispatch an action which will call the reducer function
      dispatch(addUser(res.data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex justify-center my-20">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center">Login</h2>
          <div className="space-y-5 w-full">
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold">Email Id</label>
              <input
                type="email"
                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
                placeholder="Email address"
                className="p-2 rounded-sm border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="password"
                className="p-2 border border-gray-600 focus:outline-none rounded-sm"
              />
            </div>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={ handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
