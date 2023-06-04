import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import file CSS untuk komponen LoginPage

const LoginPage = ({ handleLogin, loggedIn }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    handleLogin();
  };

  if (loggedIn) {
    // Jika pengguna sudah login, redirect ke halaman beranda
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="login-page">
      <h1>Halaman Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </Form>
      </Formik>
      <p>
        Belum punya akun? <Link to="/register">Daftar disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;