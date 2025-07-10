import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (!connections.length === 0)
    return <h1 className="text-red-400">No connections found!</h1>;
  return (
    <div className="text-center my-10 mx-auto max-w-1/2">
      <h1 className="font-bold text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, photoUrl, gender, about } =
          connection;
        return (
          <div className="flex m-4 p-4 rounded-lg bg-base-300">
            <div>
              <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              {age && gender && <p>{age + ", " + gender}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
