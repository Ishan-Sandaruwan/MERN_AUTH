import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const { currentUser } = useSelector((state) => state.user);
  
  const navigate = useNavigate();
  const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "signin",
      title: "Signin",
    },
  ];
  const icoStyle = "w-[28px] h-[28px] object-contain text-white";
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex p-3 justify-between items-center bg-black font-poppins">
      <h1
        className="text-3xl font-bold cursor-pointer text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        USER
        <span className="font-semibold text-slate-500">_Auth</span>
      </h1>
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <React.Fragment key={nav.id}>
            {nav.title === "Signin" && currentUser ? (
              <div className="text-slate-400 overflow-hidden ">
                <Link to="/profile">
                  <img
                    className="h-9 object-cover rounded-full"
                    src={currentUser.avator}
                    alt="profile"
                  />
                </Link>
              </div>
            ) : (
              <li
                className={`font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-400"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                <Link to={nav.id}>
                  <p>{nav.title}</p>
                </Link>
                {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {!toggle ? (
          <AiOutlineMenu
            className={icoStyle}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineClose
            className={icoStyle}
            onClick={() => setToggle(!toggle)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-black`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <React.Fragment key={nav.id}>
                {nav.title === "Signin" && currentUser ? (
                  <div className="text-slate-400 overflow-hidden w-full ">
                    <Link to="/profile">
                      <img
                        className="h-11 object-cover rounded-full"
                        src={currentUser.avator}
                        alt="profile"
                      />
                    </Link>
                  </div>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-slate-400"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(!toggle);
                    }}
                  >
                    <Link to={nav.id}>
                      <p>{nav.title}</p>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
