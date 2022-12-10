import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import Texterror from "./Texterror";
import * as Yup from "yup";
function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required").email("invalid email"),
    password: Yup.string().required("required").min(4, "minimum 4 digit"),
  });
  const onSubmit = (values) => {
    console.log("formik values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="email"> email</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage name="email" component={Texterror}/>
            </div>
            <div className="form-control">
              <label htmlFor="password"> password</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage name="password" component={Texterror} />
            </div>
             <button type="submit" disabled={!formik.isValid}>submit</button> 
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
