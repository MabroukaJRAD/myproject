import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import AuthReducer from "../redux/reducers/AuthReducer";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logOut(navigate));
  };

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log(isAuth);
  return (
    <div>
      {isAuth && (
        <Button variant="info" onClick={handleClick}>
          {" "}
          LOGOUT
        </Button>
      )}
    </div>
  );
};

export default Navbar;
