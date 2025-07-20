import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Reminder() {
  useEffect(() => {
    const interval = setInterval(() => {
      toast.info("⏰ Time to take a short break!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }, 60000 * 60); // every hour
    return () => clearInterval(interval);
  }, []);

  return <ToastContainer />;
}

export default Reminder;
