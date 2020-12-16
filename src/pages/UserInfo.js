import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function UserInfo() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((item) => item.id.name === id);

  return (
    <main className="main">
      <ul className="user-info">
        <li className="user-info-item">
          <img src={user && user.picture.large} alt={user && user.name.first} />
        </li>
        <li className="user-info-item">
          {user && user.name.first} {user && user.name.last}
        </li>
        <li className="user-info-item">{user && user.email}</li>
        <li className="user-info-item">
          {user && user.location.city}, {user && user.location.country}
        </li>
        <li className="user-info-item">{user && user.gender}</li>
        <li className="user-info-item">{new Date(user && user.dob.date).toDateString()}</li>
        <li className="user-info-item">phone: {user && user.phone}</li>
      </ul>
    </main>
  );
}

export default UserInfo;
