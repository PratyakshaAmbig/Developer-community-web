import React from "react";

const DynamicToastMessage = ({message}) => {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>{message} successfully.</span>
      </div>
    </div>
  );
};

export default DynamicToastMessage;
