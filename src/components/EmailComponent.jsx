/* eslint-disable react/prop-types */
import { useState } from "react";

const EmailComponent = ({ formSubmissionEmail = () => {} }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const renderInputField = () => {
    return (
      <div className="email-field">
        <div className="label-error">
          <label htmlFor="email-id">Email Address</label>
          {error && <p>Valid Email Required</p>}
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="email@company.com"
          autoComplete="off"
          style={
            error
              ? {
                  backgroundColor: "hsla(4, 100%, 67%, 0.4)",
                  border: "solid 2px hsl(4, 100%, 67%)",
                  boxShadow: "0px 0px 3px hsla(4, 100%, 67%)",
                }
              : null
          }
          id="email-id"
        />
      </div>
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitForm(e);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    } else {
      setError(false);
      formSubmissionEmail(email);
    }
  };

  return (
    <>
      <div className="img-container">
        <img
          src="../../assets/images/illustration-sign-up-desktop.svg"
          width="400"
          height="593"
          className=" desktop-img"
        />
        <img
          src="../../assets/images/illustration-sign-up-mobile.svg"
          width="375"
          height="284"
          className=" mobile-img"
        />
      </div>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <h1 className="heading">Stay Updated!</h1>
        <p className="description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li>
            <img src="../../assets/images/icon-list.svg" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src="../../assets/images/icon-list.svg" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src="../../assets/images/icon-list.svg" />
            <p>And much more!</p>
          </li>
        </ul>
        {renderInputField()}
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </>
  );
};

export default EmailComponent;
