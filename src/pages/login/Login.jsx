import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";

import "./login.scss";
import { NavLink, useNavigate } from "react-router-dom";

const initialState = {
  password: "",
  email: "",
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Juda qisqa!")
    .max(50, "Juda uzun!")
    .required("Majburiy"),
  password: Yup.string().min(6, "qisqa").max(50, "uzun!").required("Majburiy"),
});

const Login = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      setSubmitting(false);
      setValues(initialState);
      navigate("/");
    }, [2000]);
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="register__logo">
          <img src={logo} alt="" />
        </div>
        <h3 className="register__title">{t("title")}</h3>
        <div className="register__link">
          <p>{t("login-desc")}</p>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
        <Formik
          initialValues={initialState}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          className="login__form"
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="form">
              <label htmlFor="email">{t("email")}*</label>
              <Field
                id="email"
                className={`inp ${
                  errors.email && touched.email ? "error" : ""
                }`}
                placeholder={t("email")}
                name="email"
                type="email"
              />

              <label htmlFor="password">{t("password")}*</label>
              <Field
                id="password"
                className={`inp ${
                  errors.password && touched.password ? "error" : ""
                }`}
                placeholder={t("password")}
                name="password"
              />
              <button
                className="login__btn"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Loading..." : "Continue"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="login__desc">{t("reversed")}</p>
      </div>
    </div>
  );
};

export default Login;
