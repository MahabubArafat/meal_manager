import React, { useState } from "react";
import axios from "axios";

const TakeMeal = () => {
  const [message, setMessage] = useState("");
  const onClick = async (e) => {
    try {
      const response = await axios.get("http://localhost:5000/api/meal");
      setMessage(response.data.meal);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      {message ? (
        <p>{message}</p>
      ) : (
        <button className="btn btn-success" onClick={(e) => onClick(e)}>
          Take A Meal
        </button>
      )}
    </>
  );
};

export default TakeMeal;
