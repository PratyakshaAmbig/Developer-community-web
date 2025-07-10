import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import ReUseUserCard from "./ReUseUserCard";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1 className="flex justify-center my-10">No Requests found!</h1>;
  return (
    <div className="text-center my-10 mx-auto sm:max-w-1/2 w-full">
      <h1 className="font-bold text-3xl">Connections</h1>
      {requests.map((request) => {
        const { _id,firstName, lastName, age, photoUrl, gender, about } = request.fromUserId;
        return (
          <ReUseUserCard
            key={_id}
            userData={{
              firstName,
              lastName,
              age,
              photoUrl,
              gender,
              about,
              showButton: true,
              requestId:request._id
            }}
          />
        );
      })}
    </div>
  );
};

export default Requests;
