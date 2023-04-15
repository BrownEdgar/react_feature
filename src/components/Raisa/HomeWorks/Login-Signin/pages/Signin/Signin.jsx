import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./Signin.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Z]/, "firstname must started with UpperCase!")
    .required(),
  lastName: yup.string().matches(/[A-Z]/).required(),

  email: yup.string().email().required(),
  password: yup.string().required,
});

export default function Signin() {
  const [data, setData] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setData([...data, values]);
    //console.log(values);
    resetForm();
  };

  return (
    <div className="App">
      <div>
        <h1>Responsive Contact us Form</h1>
      </div>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="Container">
                  <div>
                    <label htmlFor="firstname">First Name</label>
                    <Field type="text" name="firstName" id="firstName" />
                    <ErrorMessage name="firstname">
                      {(err) => <p className="error">{err}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label htmlFor="lastname">Last Name</label>
                    <Field type="text" name="lastName" id="lastName" />
                    <ErrorMessage name="lastname">
                      {(err) => <p className="error">{err}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label htmlFor="email">Email Address</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email">
                      {(err) => <p className="error">{err}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label htmlFor="password">password Name</label>
                    <Field type="text" name="password" id="password" />
                    <ErrorMessage name="password">
                      {(err) => <p className="error">{err}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                <div>
                  <button type="Submit" className="Submit">
                    Submit
                  </button>
                </div>

                <div className="obj">
                  <pre>{JSON.stringify(formik.values, null, 1)}</pre>{" "}
                  {/* sarqel axyusak heto */}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
