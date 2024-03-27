import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { modalPopupAction } from "../redux/store";

const Header = () => {

  const dispach = useDispatch();

  let location = useLocation();
  const url = location.pathname;


  const handlerModalActive = () => {
    dispach(modalPopupAction.modalOpen())
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2> Blog Manager </h2>
        </div>
        {url === "/blogs/" ? <button onClick={handlerModalActive} >Add New</button> : false}
      </div>
    </header>
  );
};

export default Header;
