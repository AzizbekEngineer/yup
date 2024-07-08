import React from "react";
import logo from "../../assets/logo.png";
import "./header.scss";
import { NavLink } from "react-router-dom";
import i18n from "../../lang/i18n";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={logo} width={80} height={35} alt="" />
          </NavLink>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to={"/"}>{t("home")}</NavLink>
          </li>
          <li className="header__item">{t("about")} </li>
          <li className="header__item">{t("contact")}</li>
          <button className="header__btn">
            <NavLink to={"/login"}>Log in</NavLink>
          </button>
          <button className="header__btn">
            <NavLink to={"/register"}>{t("register")}</NavLink>
          </button>
          <li className="header__item">
            <select
              name=""
              id=""
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option disabled value="">
                {t("choose-lang")}
              </option>
              <option value="en">eng</option>
              <option value="uz">uzb</option>
            </select>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
