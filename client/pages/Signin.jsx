import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
});

function Signin() {
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        // Handle form submission here
        console.log(values);
        const responce = await fetch("http://localhost:8000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        if (responce.ok) {
            const data = await responce.json()
            localStorage.setItem("token", data.token);
            setUser(data.user)
            navigate("/dashboard")
        }
        else {
            alert("Invalid credentials")
        }
    };

    return (
        <>
            <Navigation />
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-1 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-3 text-dark">Sign In</h5>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInput">Email address</label>
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="floatingPassword"
                                                placeholder="Password"
                                            />
                                            <label htmlFor="floatingPassword">Password</label>
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-check mb-3">
                                            <Field
                                                type="checkbox"
                                                name="rememberMe"
                                                className="form-check-input"
                                                id="rememberPasswordCheck"
                                            />
                                            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" disabled={isSubmitting}>
                                                Sign in
                                            </button>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-google btn-login text-uppercase fw-bold" type="button">
                                                <i className="bi bi-google"></i> Sign in with Google
                                            </button>
                                        </div>
                                        <div className="d-flex mt-3 align-items-center gap-2">
                                            <p className="m-0">Don't have an account?</p>
                                            <Link to='/signup'>signup</Link>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
