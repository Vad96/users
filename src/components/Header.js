import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import getTime from "../helpers/getTime";
import { useTranslation } from "react-i18next";

function Header(props) {
  const [time, setTime] = useState("");
  const { pickedUsers } = useSelector((state) => state.users);
  const location = window.location.pathname.split("/");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      {location[1] && location[1] === "user" && (
        <Link to="/" className="header-link">
          &larr; {t("home")}
        </Link>
      )}
      <div>
        <strong>{t("date")}: </strong>
        {time}
      </div>
      {t("count")}: {pickedUsers && pickedUsers.length}
      <div>
        <button className="langBtn" onClick={() => setLanguage("en")}>
          en
        </button>
        <button className="langBtn" onClick={() => setLanguage("uk")}>
          uk
        </button>
      </div>
    </header>
  );
}

export default Header;
