import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getTime from "../helpers/getTime";

function Header(props) {
  const [time, setTime] = useState("");
  const { pickedUsers } = useSelector((state) => state.users);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      Header
      <div>{time}</div>
      Users amount: {pickedUsers && pickedUsers.length}
    </header>
  );
}

export default Header;
