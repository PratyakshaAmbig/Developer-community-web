import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import DynamicToastMessage from "./DynamicToastMessage";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const toastMessageStatus = JSON.parse(localStorage.getItem("ToastMessage"));
  const [showToast, setShowToast] = useState(toastMessageStatus)

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

    if(toastMessageStatus){
      setTimeout(()=>{
        setShowToast(false);
        localStorage.setItem('ToastMessage', false);
      },1000)
    }

  if (!feed) return;
  if (feed.length == 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  return (
    feed && (
      <>
        <div className="flex justify-center mt-5 mb-20">
          <UserCard user={feed[0]} />
        </div>
        {
          showToast && (
            <DynamicToastMessage message="Login" />
          )
        }
      </>
    )
  );
};

export default Feed;
