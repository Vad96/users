import React from "react";

function User({ children }) {
  return <ul className="usersList">{children}</ul>;
}

export default User;
