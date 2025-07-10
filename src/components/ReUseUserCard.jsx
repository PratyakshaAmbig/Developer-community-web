import React from "react";

const ReUseUserCard = ({ userData }) => {
  const { firstName, lastName, age, photoUrl, gender, about, showButton } =
    userData;
  return (
    <div className="flex justify-between m-4 p-4 rounded-lg bg-base-300">
      <div className="flex items-center">
        <div>
          <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} />
        </div>
        <div className="text-left mx-4">
          <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          {age && gender && <p>{age + ", " + gender}</p>}
        </div>
      </div>
      {showButton && (
        <div className="flex items-center gap-5 my-4">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Accept</button>
        </div>
      )}
    </div>
  );
};

export default ReUseUserCard;
