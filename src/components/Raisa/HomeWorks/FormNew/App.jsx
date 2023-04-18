import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./App.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  message: "",
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Z]/, "firstname must started with UpperCase!")
    .required(),
  lastName: yup.string().matches(/[A-Z]/).required(),

  email: yup.string().email().required(),
  website: yup.string().required,
  message: yup.string(),
});

export default function App() {
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
                    <label htmlFor="website">Website Name</label>
                    <Field type="text" name="website" id="website" />
                    <ErrorMessage name="website">
                      {(err) => <p className="error">{err}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label htmlFor="message">Write your message</label>
                    <Field
                      type="text"
                      name="message"
                      id="message"
                      as="textarea"
                    />
                    <ErrorMessage name="message">
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
