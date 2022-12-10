import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Texterror from "./Texterror";
//import { Autocomplete } from "@mui/material";

function Nyaformhai() {
  const [saved, setsaved] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    comments: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phonenumber: [" ", ""],
  };
  const savedvalues = {
    name: "nishu",
    email: "rathorenisha499@gmail.com",
    password: "123455",
    comments: "wrf",
    social: {
      facebook: "nishi31",
      twitter: "baihsgd21",
    },
    phonenumber: ["6367291559 ", ""],
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().required("required").email("invalid format"),
    password: Yup.string()
      .required("required")
      .min(6, "min six digit required"),
    comments: Yup.string().required("required"),
  });

  console.log("form values", Formik.values);
  return (
    <Formik
      enableReinitialize
      initialValues={saved || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("formik props", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">username</label>
              <Field name="name" type="text" id="name" />{" "}
              <ErrorMessage name="name" component={Texterror} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                id="email"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component={Texterror} />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" id="password" />
              <ErrorMessage name="password" component={Texterror} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">comments</label>
              <Field name="comments" as="textarea" id="comments" />
              <ErrorMessage name="comments" component={Texterror} />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">facebook profile</label>
              <Field
                name="social.facebook"
                type="text"
                id="facebook"
                placeholder="Enter profile"
              />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">twitter profile</label>
              <Field
                name="social.twitter"
                type="text"
                id="twitter"
                placeholder="Enter profile"
              />
            </div>
            <div className="form-control">
              <label htmlFor="primaryph">phone no.*</label>
              <Field name="phonenumber[0]" type="text" id="primaryph" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryph">mob no.</label>
              <Field name="phonenumber[1]" type="text" id="secondaryph" />
            </div>
            <div className="form-control">
              <Button
                variant="contained"
                mb="4px"
                type="Submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </Button>
              <button onClick={() => setsaved(savedvalues)}>
                load saved values
              </button>
              <Button type="reset  ">RESET</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Nyaformhai;
