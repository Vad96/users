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
          <img src={user.picture.large} alt={user.name.first} />
        </li>
        <li className="user-info-item">
          {user.name.first} {user.name.last}
        </li>
        <li className="user-info-item">{user.email}</li>
        <li className="user-info-item">
          {user.location.city}, {user.location.country}
        </li>
        <li className="user-info-item">{user.gender}</li>
        <li className="user-info-item">{new Date(user.dob.date).toDateString()}</li>
        <li className="user-info-item">phone: {user.phone}</li>
      </ul>
    </main>
  );
}

export default UserInfo;
