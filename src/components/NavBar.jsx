import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { language, SUPPORTED_LANGUAGES } from "../utils/language";
import { toggleLanguage } from "../utils/languageSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const lang = useSelector((store) => store.config.language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeLanguage = (e) => {
    dispatch(toggleLanguage(e.target.value));
  };
  return (
    <div className="">
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Developer Community 🧑🏻‍💻
          </Link>
        </div>

        {user && (
          <div className="sm:flex gap-2 items-center hidden">
            <select
              className="cursor-pointer border-none sm:block hidden"
              onChange={handleChangeLanguage}
              value={lang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang}
                  className="bg-base-300 cursor-pointer"
                  value={lang}
                >
                  {lang}
                </option>
              ))}
            </select>
            <p className="hidden sm:block">
              {language[lang]?.Welcome}, {user.firstName}
            </p>
            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="sm:block hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    {language[lang].Profile}
                    <span className="badge">{language[lang].New}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">{language[lang].Connections}</Link>
                </li>
                <li>
                  <Link to="/requests">{language[lang].Requests}</Link>
                </li>
                <li>
                  <a onClick={handleLogoout}>{language[lang].Logout}</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {user && (
          <div
            tabIndex={0}
            onClick={()=>setIsMenuOpen(!isMenuOpen)}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-2 block sm:hidden"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoUrl} />
            </div>
          </div>
        )}
      </div>
      {
        isMenuOpen &&(
          <div className="w-full bg-base-300 mt-1 p-2 transition-all">
        <select
          className="cursor-pointer border-none  flex items-center justify-center mx-auto p-2"
          onChange={handleChangeLanguage}
          value={lang}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              key={lang}
              className="bg-base-300 cursor-pointer"
              value={lang}
            >
              {lang}
            </option>
          ))}
        </select>
        <ul
          tabIndex={0}
          className="w-full menu menu-sm dropdown-content z-1 shadow"
        >
          <li>
            <Link to="/profile" className="justify-between">
              {language[lang].Profile}
              <span className="badge">{language[lang].New}</span>
            </Link>
          </li>
          <li>
            <Link to="/connections">{language[lang].Connections}</Link>
          </li>
          <li>
            <Link to="/requests">{language[lang].Requests}</Link>
          </li>
          <li>
            <a onClick={handleLogoout}>{language[lang].Logout}</a>
          </li>
        </ul>
      </div>
        )
      }
    </div>
  );
};

export default NavBar;
