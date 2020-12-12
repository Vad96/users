import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function UserInfo() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((item) => item.id.name === id);

  return (
    <main className="main">
      <ul>
        <li>
          <img src={user.picture.medium} alt={user.name.first} />
        </li>
        <li>
          {user.name.first} {user.name.last}
        </li>
        <li>{user.email}</li>
        <li>
          {user.location.city}, {user.location.country}
        </li>
        <li>{user.gender}</li>
        <li>{new Date(user.dob.date).toDateString()}</li>
        <li>phone: {user.phone}</li>
      </ul>
    </main>
  );
}

export default UserInfo;
