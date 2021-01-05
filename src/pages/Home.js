import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUsers, addUser, followUser } from "../redux/actions/actions";
import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";
import User from "../components/User";
import Search from "../components/Search";
import getTime from "../helpers/getTime";

function Home() {
  const { users, pickedUsers } = useSelector((state) => state.users);
  const { text } = useSelector((state) => state.text);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const searched = (text) => (user) =>
    `${user.name.first}${user.name.last}`.toLowerCase().includes(text);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Search />
      <main className="main">
        <Tabs>
          <Tab label={t("users")}>
            <User>
              {users ? (
                users.filter(searched(text)).map((user) => {
                  return (
                    <li key={user.email} className="user">
                      <Link to={`/user/${user.id.name}`}>
                        <img
                          src={user.picture.large}
                          alt={user.name.first}
                          className="user-image"
                        />
                        <div className="user-name">
                          {user.name.first} {user.name.last}
                        </div>
                      </Link>
                      {user.addedTime && (
                        <div className="user-time">Added: {user.addedTime}</div>
                      )}

                      <button
                        className={
                          user.followed ? "user-button-followed" : "user-button"
                        }
                        disabled={user.followed ? user.followed : false}
                        onClick={() => {
                          dispatch(addUser({ ...user, added: getTime() }));
                          dispatch(followUser(user.name.first));
                        }}
                      >
                        {user.followed ? t("added") : t("add")}
                      </button>
                    </li>
                  );
                })
              ) : (
                <div>loading...</div>
              )}
            </User>
            <button
              onClick={() => dispatch(getUsers())}
              className="button-load-more"
            >
              {t("load")}
            </button>
          </Tab>
          
          <Tab label={t("followed")}>
            <User>
              {pickedUsers.length > 0 ? (
                pickedUsers.filter(searched(text)).map((user) => {
                  return (
                    <li key={user.email} className="user">
                      <Link to={`/user/${user.id.name}`}>
                        <img src={user.picture.large} alt={user.name.first} />
                        <div className="user-name">
                          {user.name.first} {user.name.last}
                        </div>
                      </Link>
                      <div>
                        {t("added")}: {user.added}
                      </div>
                    </li>
                  );
                })
              ) : (
                <div>No users yet...</div>
              )}
            </User>
          </Tab>
        </Tabs>
      </main>
    </>
  );
}

export default Home;
