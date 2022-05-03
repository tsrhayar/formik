import "./App.css";

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

function App() {
  const initialValues = {
    email: "",
    password: "",
    adress: {
      rue: "",
      quartier: "",
      ville: "",
      pays: "",
    },
    bio: "",
    city: "",
    hobby: "",
    social: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email invalid").required("Email obligatoire"),
    password: Yup.string()
      .min(6, "Le mot de passe doit contirent au moins 6 character")
      .required("Mot de passe obligatoire"),
    adress: Yup.object({
      rue: Yup.string().required("rue obligatoire"),
      quartier: Yup.string().required("quartier obligatoire"),
    }),
    bio: Yup.string().required("bio obligatoire"),
    city: Yup.string().required("city obligatoire"),
    hobby: Yup.string().required("hobby obligatoire"),
    social: Yup.array().min(2, "au moins 2"),
  });

  const options = [
    { key: "Veuillez selectionner votre ville", value: "" },
    { key: "Safi", value: "Safi" },
    { key: "Rabat", value: "Rabat" },
    { key: "Fes", value: "Fes" },
    { key: "Casablanca", value: "Casablanca" },
  ];

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };

  const radioOptions = [
    { key: "Voyage", value: "Voyage" },
    { key: "Sport", value: "Sport" },
    { key: "Lecture", value: "Lecture" },
    { key: "Natation", value: "Natation" },
  ];

  const checkOptions = [
    { key: "Facebook", value: "Facebook" },
    { key: "Twitter", value: "Twitter" },
    { key: "Instagram", value: "Instagram" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      enableReinitialize
    >
      {(formik) => (
        <div className="container mt-5">
          <Form>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <Field className="form-control" id="email" name="email" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field type="password" className="form-control" id="password" name="password" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="mb-3">
                  <label htmlFor="rue" className="form-label">
                    rue
                  </label>
                  <Field type="text" className="form-control" id="rue" name="adress.rue" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="adress.rue" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="mb-3">
                  <label htmlFor="quartier" className="form-label">
                    quartier
                  </label>
                  <Field type="text" className="form-control" id="quartier" name="adress.quartier" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="adress.quartier" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="mb-3">
                  <label htmlFor="ville" className="form-label">
                    ville
                  </label>
                  <Field type="text" className="form-control" id="ville" name="adress.ville" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="adress.ville" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="mb-3">
                  <label htmlFor="pays" className="form-label">
                    pays
                  </label>
                  <Field type="text" className="form-control" id="pays" name="adress.pays" />
                  <div className="invalid-feedback d-block">
                    <ErrorMessage name="adress.pays" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6"></div>
              <div className="col-12 col-sm-6"></div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  bio
                </label>
                <Field as="textarea" className="form-control" id="bio" name="bio" />
                <div className="invalid-feedback d-block">
                  <ErrorMessage name="bio" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  city
                </label>
                <Field as="select" className="form-control" id="city" name="city">
                  {options.map(({ key, value }) => {
                    return (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    );
                  })}
                </Field>
                <div className="invalid-feedback d-block">
                  <ErrorMessage name="city" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label className="form-label">hobby</label>
                <Field className="form-control" id="hobby" name="hobby">
                  {({ field }) => {
                    return radioOptions.map(({ key, value }) => {
                      return (
                        <React.Fragment key={key}>
                          <input type="radio" {...field} id={key} value={value} checked={field.value === value} />
                          <label htmlFor={key}>{key}</label>
                        </React.Fragment>
                      );
                    });
                  }}
                </Field>
                <div className="invalid-feedback d-block">
                  <ErrorMessage name="hobby" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label className="form-label">social</label>
                <Field className="form-control" id="social" name="social">
                  {({ field }) => {
                    return checkOptions.map(({ key, value }) => {
                      return (
                        <React.Fragment key={key}>
                          <input
                            type="checkbox"
                            {...field}
                            id={key}
                            value={value}
                            checked={field.value.includes(value)}
                          />
                          <label htmlFor={key}>{key}</label>
                        </React.Fragment>
                      );
                    });
                  }}
                </Field>
                <div className="invalid-feedback d-block">
                  <ErrorMessage name="social" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!formik.isValid && !formik.dirty}>
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default App;
