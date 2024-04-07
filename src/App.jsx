/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import EmailComponent from "./components/EmailComponent";
import SuccessComponent from "./components/SuccessComponent";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formEmail, setFormEmail] = useState("");

  const formSubmissionEmail = (mail) => {
    setFormSubmitted(true);
    setFormEmail(mail);
  };

  const handleDismiss = () => {
    setFormSubmitted(false);
    setFormEmail("");
  };

  return (
    <div className="app-container">
      {formSubmitted ? (
        <SuccessComponent email={formEmail} handleDismiss={handleDismiss} />
      ) : (
        <EmailComponent formSubmissionEmail={formSubmissionEmail} />
      )}
    </div>
  );
};

export default App;
