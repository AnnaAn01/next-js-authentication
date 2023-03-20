"use client";
import { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "@/context/AuthContext2";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "@/hooks/useAuth";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }) {
  const { loading, data, error } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signin } = useAuth();

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);
  // we can use useEffect here because this is a client base component
  // any time these inputs change, we want to run this useEffect
  useEffect(() => {
    if (isSignin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  const handleClick = () => {
    if (isSignin) {
      signin({ email: inputs.email, password: inputs.password });
    }
  };

  return (
    <div>
      <button
        className={`${
          isSignin ? "signin-modal-button" : "signup-modal-button"
        }`}
        onClick={handleOpen}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="modal-box-wrapper">
              <CircularProgress />
            </div>
          ) : (
            // <CircularProgress />
            <div className="modal-box-wrapper">
              {error ? (
                <Alert className="alert-message" severity="error">
                  {error}
                </Alert>
              ) : null}
              <div className="modal-box-1">
                <p className="modal-box-p">
                  {`${isSignin ? "Sign In" : "Create Account"}`}
                  {/* <h1
                  onClick={() => {
                    setAuthState({
                      data,
                      loading,
                      error: "byebye",
                    });
                  }}
                >
                  {error}
                </h1> */}
                </p>
              </div>
              <div className="modal-box-2">
                <h2 className="modal-box-title-2">{`${
                  isSignin ? "Log Into Your Account" : "Create Your Account"
                }`}</h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignin={isSignin}
                />
                <button
                  className={
                    disabled
                      ? "modal-last-button disabled"
                      : "modal-last-button"
                  }
                  disabled={disabled}
                  onClick={handleClick}
                >{`${isSignin ? "Sign In" : "Create Account"}`}</button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
