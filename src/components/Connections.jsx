import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ReUseUserCard from "./ReUseUserCard";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return <h1 className="flex justify-center my-10">No connections found!</h1>;
  return (
    <div className="text-center my-10 mx-auto sm:max-w-1/2 w-full">
      <h1 className="font-bold text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, age, photoUrl, gender, about } =
          connection;
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
              showButton: false,
              requestId: null,
            }}
          />
        );
      })}
    </div>
  );
};

export default Connections;
