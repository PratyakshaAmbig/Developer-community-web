import axios from "axios";
import React, { use } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
   const { _id, firstName, lastName, about, photoUrl, gender, age} = user;
   const dispatch = useDispatch();

   const handleSendRequest = async(status, userID)=>{
    try {
      const res = await axios.post(BASE_URL + '/request/sent/' + status + "/"+ userID,{},{withCredentials:true});
      dispatch(removeFeed(userID))
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div className="card bg-base-300 w-96 shadow-sm m-4">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {
            age && gender && <p>{age + ", " +gender}</p>
        }
        {
            about &&(
                <p>{about}</p>
            )
        }
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary" onClick={()=>handleSendRequest('ignored', _id)}>Ingnore</button>
          <button className="btn btn-secondary" onClick={()=>handleSendRequest('interested',_id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
