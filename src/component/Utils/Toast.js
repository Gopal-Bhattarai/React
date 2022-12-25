import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

// toast.configure()
const CustomToast = ({ closeToast }) => {
    return (
        <div>
            Someting went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

const Toast = () => {
  const notify = () => {
    toast(<CustomToast />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default Toast;
