/*import { useState } from "react";*/
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.scss";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(6)
    .matches(/^[A-Z]/, "username must started with UpperCase!")
    .required(),
  password: yup
    .string()
    .matches(/[A-Z]/)
    .matches(/\d/, "password must include number")
    .min(8)
    .required(),

  email: yup.string().email().required(),
});

export default function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmPwd: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div className="App">
      <div className="left">
        <div className="leftside">
          <h2>HTML CSS</h2>
          <h2>Registration</h2>
          <h2>Form</h2>
          <h2>Template</h2>
          <h1>Join Us</h1>
        </div>
      </div>
      <div className="right">
        <div className="rightside">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="errors">{formik.errors.username} </p>
              ) : null}
              <label htmlFor="username">Username</label>
            </div>

            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="...@mail..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="errors">{formik.errors.email} </p>
              ) : null}
              <label htmlFor="email">Email</label>
            </div>

            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="************"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="errors">{formik.errors.password} </p>
              ) : null}
              <label htmlFor="password">Password</label>
            </div>

            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
