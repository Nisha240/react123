import React from "react";

import { useFormik } from "formik";
import Button from "@mui/material/Button";

function Formikold() {
  const initialValues = {
    name: "",
    email: " ",
    password: " ",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.name = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    else{ 
      <div className="nice">{errors.email="cool"}</div>
    }
    if (!values.password) {
      errors.password = "required";
    }
    return errors;
  };
  const formikk = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  
  console.log("form values", formikk.touched);
  return (
    <div className="xyz">
      <h1 className="primary">Youtube Form</h1>
      <form onSubmit={formikk.handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">username</label>
        <input
          name="name"
          type="text"
          id="name"
          onBlur={formikk.handleBlur}
          onChange={formikk.handleChange}
          value={formikk.values.name}
        />
        {formikk.touched.name && formikk.errors.name ? <div className="error">{formikk.errors.name}</div> : null}
        </div>
        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          onBlur={formikk.handleBlur}
          onChange={formikk.handleChange}
          value={formikk.values.email}
        />
        {formikk.touched.email && formikk.errors.email ? <div className="error">{formikk.errors.email}</div> : null}
        </div>
        <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onBlur={formikk.handleBlur}
          id="password"
          onChange={formikk.handleChange}
          value={formikk.values.password}
        />
        {formikk.touched.password && formikk.errors.password ?( <div className="error">{formikk.errors.password}</div>) : null}
        </div>
        <div className="form-control">
          <Button variant="contained" mb="4px" type="Submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Formikold;