// mui and formik. Yup for validation

import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Typography, Button } from "@material-ui/core";

interface FormValues {
  firstName: string;
  lastName: string;
  teamId: string;
  userType: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FC = () => {
  let values = {
    firstName: "",
    lastName: "",
    teamId: "",
    userType: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={{
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {() => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "75vw",
            margin: "0 auto",
          }}
        >
          <Typography variant="h4">Register for Allez</Typography>
          <Field
            placeholder="First Name"
            type="input"
            as={TextField}
            name="firstName"
            fullWidth
          ></Field>
          <Field
            placeholder="Last Name"
            type="input"
            as={TextField}
            name="lastName"
            fullWidth
          ></Field>
          <Field
            placeholder="Email"
            type="input"
            as={TextField}
            name="email"
            fullWidth
          ></Field>
          <Field
            placeholder="Password"
            type="input"
            as={TextField}
            name="password"
            fullWidth
          ></Field>
          <Field
            placeholder="Confirm Password"
            type="input"
            as={TextField}
            name="confirmPassword"
            fullWidth
          />
          <Button type="submit">Create Account</Button>
        </Form>
      )}
    </Formik>
  );
};
