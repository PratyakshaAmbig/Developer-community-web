import React from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/language";

const DynamicToastMessage = ({message}) => {
  const lang = useSelector((store)=>store.config.language);
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>{message} {language[lang].successfully}</span>
      </div>
    </div>
  );
};

export default DynamicToastMessage;
