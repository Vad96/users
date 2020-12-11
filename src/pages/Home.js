import React, { useState, useEffect } from "react";
import { _ } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, addUser, loadMoreUsers } from "../redux/actions/actions";
import User from "../components/User";
import Search from "../components/Search";
import getTime from "../helpers/getTime";

function Home() {
  const [activeTab, setActiveTab] = useState("1");
  const { users, pickedUsers, usersCount } = useSelector(
    (state) => state.users
  );
  const { loading } = useSelector((state) => state.loading);
  const { text } = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const searched = (text) => (user) =>
    `${user.name.first}${user.name.last}`.toLowerCase().includes(text);

  useEffect(() => {
    dispatch(getUsers(usersCount));
  }, [usersCount]);

  return (
    <>
      <Search />
      <main className="main">
        <button
          style={{ display: "inline-block" }}
          type="button"
          onClick={() => setActiveTab("1")}
        >
          Tab 1
        </button>
        <button
          style={{ display: "inline-block" }}
          type="button"
          onClick={() => setActiveTab("2")}
        >
          Tab 2
        </button>
        <div className={activeTab === "1" ? "usersList" : "hideTab"}>
          {users.results && !loading ? (
            users.results.filter(searched(text)).map((user) => {
              return (
                <div key={user.email}>
                  <Link to={`/user/${user.id.name}`}>
                    <img src={user.picture.medium} alt={user.name.first} />
                    <div>
                      {user.name.first} {user.name.last}
                    </div>
                  </Link>

                  {/* {pickedUsers &&
                    pickedUsers.filter((pickedUser) => {
                      if (user.id.name == pickedUser.id.name) {
                        return <div>hell</div>;
                      }
                    })} */}
                  <button
                    onClick={() =>
                      dispatch(addUser({ ...user, added: getTime() }))
                    }
                  >
                    Add
                  </button>
                </div>
              );
            })
          ) : (
            <div>loading...</div>
          )}
          <button onClick={() => dispatch(loadMoreUsers())}>Load more</button>
        </div>

        <div className={activeTab === "2" ? "pickedUsers" : "hideTab"}>
          {pickedUsers ? (
            pickedUsers.filter(searched(text)).map((user) => {
              return (
                <div key={user.email}>
                  <Link to={`/user/${user.id.name}`}>
                    <img src={user.picture.medium} alt={user.name.first} />
                    <div>
                      {user.name.first} {user.name.last}
                    </div>
                  </Link>
                  <div>Added: {user.added}</div>
                </div>
              );
            })
          ) : (
            <div>No users yet...</div>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
