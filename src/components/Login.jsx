import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [error, setError] = useState("");

  const [isLoginForm, setIsLoginForm] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // first dispatch an action which will call the reducer function
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async()=>{
    try {
      const res = await axios.post(BASE_URL + '/signup',{firstName,lastName,emailId,password},{withCredentials:true})
      dispatch(addUser(res.data.data))
      return navigate('/profile')
    } catch (error) {
      console.log(error)
      setError(error?.response?.data || "Something went wrong");
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div className="space-y-5 w-full">
            {!isLoginForm && (
              <>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">First Name:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Email address"
                    className="p-2 rounded-sm border border-gray-600 focus:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">Last Name:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Email address"
                    className="p-2 rounded-sm border border-gray-600 focus:outline-none"
                  />
                </div>
              </>
            )}
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold">Email Id</label>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Email address"
                className="p-2 rounded-sm border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold">Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="p-2 border border-gray-600 focus:outline-none rounded-sm"
              />
            </div>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={isLoginForm? handleLogin : handleSignUp}>
              {isLoginForm? 'Login':'Sign up'}
            </button>
          </div>
          <p
            className="cursor-pointer text-center"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup here"
              : "Existing User? Login here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
