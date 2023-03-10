"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <div className="modal-box-wrapper">
            <div className="modal-box-1">
              <p className="modal-box-p">
                {`${isSignin ? "Sign In" : "Create Account"}`}
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
              <button className="modal-last-button">{`${
                isSignin ? "Sign In" : "Create Account"
              }`}</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
