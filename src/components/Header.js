import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import getTime from "../helpers/getTime";

function Header(props) {
  const [time, setTime] = useState("");
  const { pickedUsers } = useSelector((state) => state.users);
  const location = window.location.pathname.split("/");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      {location[1] && location[1] === "user" && (
        <Link to="/" className="header-link">
          &larr; Home
        </Link>
      )}
      <div>
        <strong>Current date: </strong>
        {time}
      </div>
      Users count: {pickedUsers && pickedUsers.length}
    </header>
  );
}

export default Header;
