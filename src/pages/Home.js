import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { users, pickedUsers } = useSelector((state) => state.users);
  return <main className="main">Home</main>;
}

export default Home;
