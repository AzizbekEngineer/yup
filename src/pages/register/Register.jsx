import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import "./register.scss";

const initialState = {
  email: "",
  phone: "",
  country: "",
  city: "",
  password: "",
  confirmPassword: "",
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Juda qisqa!")
    .max(50, "Juda uzun!")
    .required("Majburiy"),
  password: Yup.string().min(6, "qisqa").max(50, "uzun!").required("Majburiy"),
  phone: Yup.string().min(6, "qisqa").max(50, "uzun!").required("Majburiy"),
  country: Yup.string().min(6, "qisqa").max(50, "uzun!").required("Majburiy"),
  city: Yup.string().min(6, "qisqa").max(50, "uzun!").required("Majburiy"),
  confirmPassword: Yup.string()
    .min(6, "qisqa")
    .max(50, "uzun!")
    .required("Majburiy"),
});

const Register = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      setSubmitting(false);
      setValues(initialState);
      console.log(values);
      // navigate("/login");
    }, [2000]);
  };

  return (
    <div className="register">
      <div className="register__forms">
        <div className="register__logo">
          <img src={logo} alt="" />
        </div>
        <h3 className="register__title">{t("title")}</h3>
        <div className="register__link">
          <p>{t("login-desc")}</p>
          <NavLink to={"/login"}>Log in</NavLink>
        </div>
        <Formik
          initialValues={initialState}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="register__form">
              <div className="input">
                <label htmlFor="email">{t("email")}*</label>
                <Field
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  placeholder={t("email")}
                  name="email"
                  id="email"
                />
              </div>
              <div className="input">
                <label htmlFor="phone">{t("phone")}*</label>
                <Field
                  className={`inp ${
                    errors.phone && touched.phone ? "error" : ""
                  }`}
                  placeholder={t("phone")}
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="register__address">
                <div className="input">
                  <label htmlFor="country">{t("country")}*</label>
                  <Field
                    className={`inp ${
                      errors.country && touched.country ? "error" : ""
                    }`}
                    placeholder={t("country")}
                    name="country"
                    id="country"
                  />
                </div>
                <div className="input">
                  <label htmlFor="city">{t("city")}*</label>
                  <Field
                    className={`inp ${
                      errors.city && touched.city ? "error" : ""
                    }`}
                    placeholder={t("city")}
                    name="city"
                    id="city"
                  />
                </div>
              </div>
              <div className="input">
                <label htmlFor="password">{t("password")}*</label>
                <Field
                  className={`inp ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                  placeholder={t("password")}
                  name="password"
                  id="password"
                  type="password"
                />
              </div>
              <div className="input">
                <label htmlFor="confirmPassword">{t("confirmPassword")}*</label>
                <Field
                  className={`inp ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : ""
                  }`}
                  placeholder={t("confirmPassword")}
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                />
              </div>
              <button
                className="register__btn"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Loading..." : "Register"}
              </button>
              <p className="register__desc">
                {t("register-desc1")}
                <span> {t("register-desc2")}</span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
