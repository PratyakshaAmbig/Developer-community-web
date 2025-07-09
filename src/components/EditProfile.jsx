import React, { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");

  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    // clear the error
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      setError(error?.response?.data);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center gap-10 my-20">
        <div className="flex justify-center">
          <div className="card card-border bg-base-300 w-96">
            <div className="card-body">
              <h2 className="text-xl font-bold text-center">Edit Profile</h2>
              <div className="space-y-2 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">First Name:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="first name"
                    className="p-2 rounded-sm border border-gray-600 focus:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">Last Name:</label>
                  <input
                    type="text"
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">Photo URL:</label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">age:</label>
                  <input
                    type="number"
                    placeholder="last name"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">Gender:</label>
                  <input
                    type="text"
                    placeholder="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">About:</label>
                  <textarea
                    type="text"
                    placeholder="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, about, photoUrl, gender, age }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
