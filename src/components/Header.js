import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import getTime from "../helpers/getTime";

function Header(props) {
  const [time, setTime] = useState("");
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
    </header>
  );
}

export default Header;
