import { IoAlertSharp } from "react-icons/io5";
import "./alert.css";
const Alert = () => {
  return (
    <div className="circle-container">
      <div className="alert-circle">
        <IoAlertSharp className="check-icon" />
      </div>
    </div>
  );
};

export default Alert;
