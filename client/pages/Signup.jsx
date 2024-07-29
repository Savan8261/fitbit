import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

function Signup() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setValue('uuid', uuidv4());  // Set the initial value of the UUID field
    }, [setValue]);


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

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navigation />
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-1 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-3 text-dark">Sign up</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex gap-3">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="First Name"
                                            {...register("firstName", { required: "First name is required" })}
                                        />
                                        <label htmlFor="firstName">First Name</label>
                                        {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Last Name"
                                            {...register("lastName", { required: "Last name is required" })}
                                        />
                                        <label htmlFor="lastName">Last Name</label>
                                        {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email address"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                    <label htmlFor="email">Email address</label>
                                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                </div>
                                <div className=" mb-3 w-100">
                                    <label htmlFor="country">Country Code</label>
                                    <select
                                        className="form-control p-2"
                                        id="country"
                                        {...register("isdCode", { required: "Country code is required" })}
                                    >
                                        <option value=''>Select a country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.isd_code}>
                                                {country.name} ({country.isd_code})
                                            </option>
                                        ))}
                                    </select>
                                    {errors.isdCode && <span className="text-danger">{errors.isdCode.message}</span>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone number"
                                        {...register("mobileNumber", { required: "Phone number is required" })}
                                    />
                                    <label htmlFor="phone">Phone number</label>
                                    {errors.mobileNumber && <span className="text-danger">{errors.mobileNumber.message}</span>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        {...register("username", { required: "Username is required" })}
                                    />
                                    <label htmlFor="username">Username</label>
                                    {errors.username && <span className="text-danger">{errors.username.message}</span>}
                                </div>
                                <div className="my-4 mx-2 d-flex gap-2 ">
                                    <span className='font-sans font-bold text-gray-700'>Gender:</span>
                                    <div className='form-check d-flex align-items-center gap-3 px-2'>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="male"
                                                value="1"
                                                {...register("gender", { required: "Gender is required" })}
                                            />
                                            <label className="form-check-label" htmlFor="male">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value="2"
                                                {...register("gender", { required: "Gender is required" })}
                                            />
                                            <label className="form-check-label" htmlFor="female">Female</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="other"
                                                value="3"
                                                {...register("gender", { required: "Gender is required" })}
                                            />
                                            <label className="form-check-label" htmlFor="other">Other</label>
                                        </div>
                                    </div>
                                    {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        {...register("password", { required: "Password is required" })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                </div>
                                <input
                                    type="hidden"
                                    value="2"
                                    {...register("role")}
                                />
                                <input type="hidden" {...register("uuid")} />

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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
