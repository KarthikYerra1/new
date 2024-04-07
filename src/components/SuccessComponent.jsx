/* eslint-disable react/prop-types */
import success from "../assets/images/success.svg";

const SuccessComponent = ({ email = "", handleDismiss = () => {} }) => {
  return (
    <div>
      <div className="success-message">
        <img src={success} width="64" height="64" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{email}</span>. <br />
          Please open it and click the button inside to confirm your
          subscription
        </p>
      </div>

      <button onClick={() => handleDismiss()}>Dismiss message </button>
    </div>
  );
};

export default SuccessComponent;
