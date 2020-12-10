import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Header(props) {
  let history = useHistory();
  console.log(history.location);
  //   const location = useParams();
  //   console.log(location);
  return (
    <header className="header">
      Header
      {/* {location.includes("user") && <Link to="/">Go back</Link>} */}
    </header>
  );
}

export default Header;
