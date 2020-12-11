import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, loadMoreUsers } from "../redux/actions/actions";
import User from "../components/User";

function Home() {
  const { users, pickedUsers, usersCount } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(usersCount));
  }, [usersCount]);

  return (
    <main className="main">
      <div className="usersList">
        {users.results &&
          users.results.map((user) => {
            return (
              <Link to={`/user/${user.id.name}`} key={user.email}>
                <img src={user.picture.medium} alt={user.name.first} />
                <div>
                  {user.name.first} {user.name.last}
                </div>
                <button>Add</button>
              </Link>
            );
          })}
          <button onClick={() => dispatch(loadMoreUsers())}>Load more</button>
      </div>
    </main>
  );
}

export default Home;
