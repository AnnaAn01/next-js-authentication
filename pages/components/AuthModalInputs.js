import React from "react";

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignin,
}) {
  return (
    <div>
      {isSignin ? null : (
        <div className="modal-input-wrapper">
          <input
            type="text"
            className="modal-input"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="modal-input"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="modal-input-wrapper">
        <input
          type="email"
          className="modal-input-email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="modal-input-wrapper">
          <input
            type="tel"
            className="modal-input"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="modal-input"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="modal-input-wrapper">
        <input
          type="password"
          className="modal-input-email"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
}
