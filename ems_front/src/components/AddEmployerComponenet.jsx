import React, { useEffect, useState } from 'react'
import { addEmployer, getEmployer, updateEmployer } from '../services/EmployerService';
import { useNavigate, useParams } from 'react-router-dom';
import "../css/addEmployer.css"

const AddEmployerComponenet = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [errors, setError] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployer(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setAge(response.data.age);
            }).catch(error => console.log(error));
        }
    }, [id]);


    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        if (errors.firstName) setError({ ...errors, firstName: null });
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
        if (errors.lastName) setError({ ...errors, lastName: null }); // to clear the error message when we try to tap somethings 
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        if (errors.email) setError({ ...errors, email: null });
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
        if (errors.age) setError({ ...errors, age: null });
    }
    function handleErrorMessage() {
        const errors = {};
        if (!firstName.trim()) errors.firstName = 'First Name is required.';
        if (!lastName.trim()) errors.lastName = 'Last Name is required';
        if (!email.trim()) errors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Enter a valid email.';
        if (!age) errors.age = 'Age is required.';

        setError(errors);
        return Object.keys(errors).length === 0;
    }
    function onSubmit(e) {
        e.preventDefault();
        if (!handleErrorMessage()) return;
        const employer = { firstName, lastName, email, age };
        if (id) {
            updateEmployer(id, employer).then((response) => {
                console.log(response.data);
            }).catch(error => console.log(error));
            navigate("/employers", {
                state: { message: "Employer updated successfully!" }
            });

        } else {
            addEmployer(employer).then((response) => {
                console.log(response.data);
                // listEmployers().then((response) => console.log("Employers reloaded"));
            }).catch(error => console.log(error));

            navigate("/employers", {
                state: { message: "Employer added successfully" }
            });
        }

        // console.log(employer);
        // alert('Employer added successfully!');
    }
    function handlePageTitle() {
        if (id) { return <h2 className='text-center'> Update Employer</h2> }
        else { return <h2 className='text-center'> Add Employer</h2> }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <h2 className='text-center page-title'>
                {id ? "Update Employer" : "Add Employer"}
            </h2>

            <div className="card col-md-6 offset-md-3 offset-md-3" >
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">First Name:</label>
                        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} value={firstName} onChange={handleFirstNameChange} />
                        {/* <div className="invalid-feedback">
                            {errors.firstName}
                        </div>
                         */}
                        {
                            errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name:</label>
                        <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} value={lastName} onChange={handleLastNameChange} />
                        <div className="invalid-feedback">
                            {errors.lastName}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={email} onChange={handleEmailChange} />
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age:</label>
                        <select
                            className={`form-select ${errors.age ? 'is-invalid' : ''}`}
                            value={age}
                            onChange={handleAgeChange}
                        >
                            <option value="" disabled>
                                Select your age
                            </option>
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                            {errors.age}
                        </div>
                    </div>
                    <button type="button" className="btn btn-success mb-3" onClick={onSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployerComponenet