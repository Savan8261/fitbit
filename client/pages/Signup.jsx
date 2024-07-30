import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const [countries, setCountries] = useState([]);
    const { setUser } = useContext(AuthContext)

    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryData = data.map(country => ({
                    name: country.name.common,
                    isd_code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
                })).sort((a, b) => a.name.localeCompare(b.name));
                setCountries(countryData);
            })
            .catch(error => console.error('Error fetching country data:', error));
    }, []);

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        isdCode: Yup.string().required("Country code is required"),
        mobileNumber: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
        username: Yup.string().required("Username is required"),
        gender: Yup.string().required("Gender is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
    });

    const handleSubmit = async (values) => {

        const data = { ...values, uuid: uuidv4(), role: "2" }
        try {
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_URL}/user`,
              data
            );
            const user = response.data.user;
            setUser(user)
            navigate('/signin');
          } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || error);
            console.error(error);
          }
    };

    return (
        <>
            <Navigation />
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-1 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-3 text-dark">Sign up</h5>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    isdCode: '',
                                    mobileNumber: '',
                                    username: '',
                                    gender: '',
                                    password: '',
                                    role: '2',
                                    uuid: uuidv4()
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ values }) => (
                                    <Form>
                                        <div className="d-flex gap-3">
                                            <div className="form-floating mb-3 w-50">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                />
                                                <label htmlFor="firstName">First Name</label>
                                                <ErrorMessage name="firstName" component="span" className="text-danger" />
                                            </div>
                                            <div className="form-floating mb-3 w-50">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                />
                                                <label htmlFor="lastName">Last Name</label>
                                                <ErrorMessage name="lastName" component="span" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email address"
                                            />
                                            <label htmlFor="email">Email address</label>
                                            <ErrorMessage name="email" component="span" className="text-danger" />
                                        </div>
                                        <div className=" mb-3 w-100">
                                            <label htmlFor="country">Country Code</label>
                                            <Field as="select" className="form-control py-3" id="country" name="isdCode">
                                                <option value=''>Select a country</option>
                                                {countries.map((country, index) => (
                                                    <option key={index} value={country.isd_code}>
                                                        {country.name} ({country.isd_code})
                                                    </option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="isdCode" component="span" className="text-danger" />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="mobileNumber"
                                                placeholder="Phone number"
                                            />
                                            <label htmlFor="phone">Phone number</label>
                                            <ErrorMessage name="mobileNumber" component="span" className="text-danger" />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                            />
                                            <label htmlFor="username">Username</label>
                                            <ErrorMessage name="username" component="span" className="text-danger" />
                                        </div>
                                        <div className="my-4 mx-2 d-flex gap-2 ">
                                            <span className='font-sans font-bold text-gray-700'>Gender:</span>
                                            <div className='form-check d-flex align-items-center gap-3 px-2'>
                                                <div className="form-check">
                                                    <Field
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="male"
                                                        value="1"
                                                    />
                                                    <label className="form-check-label" htmlFor="male">Male</label>
                                                </div>
                                                <div className="form-check">
                                                    <Field
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="female"
                                                        value="2"
                                                    />
                                                    <label className="form-check-label" htmlFor="female">Female</label>
                                                </div>
                                                <div className="form-check">
                                                    <Field
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="other"
                                                        value="3"
                                                    />
                                                    <label className="form-check-label" htmlFor="other">Other</label>
                                                </div>
                                            </div>
                                            <ErrorMessage name="gender" component="span" className="text-danger" />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <label htmlFor="password">Password</label>
                                            <ErrorMessage name="password" component="span" className="text-danger" />
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign up</button>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-google btn-login text-uppercase fw-bold" type="button">
                                                <i className="bi bi-google"></i> Sign up with Google
                                            </button>
                                        </div>
                                        <div className="d-flex mt-3 align-items-center gap-2">
                                            <p className="m-0">Already have an account?</p>
                                            <Link to='/signin'>sign in</Link>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    );
}

export default Signup;
