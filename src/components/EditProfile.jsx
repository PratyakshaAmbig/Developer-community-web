import React, { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import DynamicToastMessage from "./DynamicToastMessage";
import { language } from "../utils/language";

const EditProfile = ({ user }) => {
  const lang = useSelector((store)=>store.config.language);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");

  const toastMessageStatus  = JSON.parse(localStorage.getItem('ToastMessage'));

  const [showToast, setShowToast] = useState(toastMessageStatus);

  const [dropdownOptionOpen, setDropdownOptionOpen] = useState(false);

  const dispatch = useDispatch();

  const genderDropdownData = [
    {id:'Male', name:language[lang].Male},
    {id:'Female', name:language[lang].Female},
    {id:'Others', name:language[lang].Others}
  ];

  if(toastMessageStatus){
    setTimeout(()=>{
      setShowToast(false);
      localStorage.setItem('ToastMessage', false);
    },1000)
  }

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
      }, 1000);
    } catch (error) {
      setError(error?.response?.data);
    }
  };
  return (
    <>
      <div className="flex  sm:flex-row flex-col  items-center justify-center sm:gap-10 gap-5 my-20">
        <div className="flex justify-center">
          <div className="card card-border bg-base-300 w-96">
            <div className="card-body">
              <h2 className="text-xl font-bold text-center">{language[lang].EditProfile}</h2>
              <div className="space-y-2 w-full">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].FirstName} :</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="first name"
                    className="p-2 rounded-sm border border-gray-600 focus:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].LastName} :</label>
                  <input
                    type="text"
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].PhotoURL} :</label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].Age} :</label>
                  <input
                    type="number"
                    placeholder="last name"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="p-2 border border-gray-600 focus:outline-none rounded-sm"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].Gender} :</label>
                  <div
                    className="flex w-full items-center border border-gray-600 rounded-sm cursor-pointer"
                    onClick={() => setDropdownOptionOpen(!dropdownOptionOpen)}
                  >
                    <div className="p-2 focus:outline-none rounded-sm w-[90%]">{language[lang][gender] || language[lang].Gender}</div>
                    <svg
                      className={`${dropdownOptionOpen ? "rotate-180" : ""} lucide lucide-chevron-down-icon lucide-chevron-down`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {dropdownOptionOpen && (
                    <div className="border border-gray-600 rounded-sm transition-all duration-1000">
                      {genderDropdownData.map((data) => (
                        <div
                          key={data.id}
                          className="bg-base-300 hover:bg-base-100 p-2 rounded-sm cursor-pointer "
                          onClick={() => {
                            setGender(data.id);
                            setDropdownOptionOpen(false);
                          }}
                        >
                          {data.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold">{language[lang].AboutMe} :</label>
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
                  {language[lang].SaveProfile}
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
        <DynamicToastMessage message={toastMessageStatus? language[lang].AccountCreated: language[lang].ProfileSaved}/>
      )}
    </>
  );
};

export default EditProfile;
