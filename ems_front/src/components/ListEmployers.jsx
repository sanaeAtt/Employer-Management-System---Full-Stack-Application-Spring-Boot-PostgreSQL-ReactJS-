import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { deleteEmployerService, listEmployers } from '../services/EmployerService';
import '../css/listEmployer.css';


const ListEmployers = () => {

    //! employers is the state variable
    //! setEmployers is the function to update the state variable
    const [employers, setEmployers] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [alertMessage , setAlertMessage] = useState("");
    const [alertType,setAlertType] = useState('');
    const navigate = useNavigate(); //* cuse useNavigate is a js function so we need to use const to declare it
    const location = useLocation();
    //!the response is the data returned from the server so we use setEmployer 
    //! function to set it in the employer table variable
    useEffect(() => {
        listEmployers()
            .then((response) => setEmployers(response.data))
            .catch((error) => console.error(error));

        if (location.state?.message) {
            setShowSuccessMessage(true);
            setAlertMessage(location.state?.message);
            setAlertType(location.state?.type || "success");


            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
                navigate(location.pathname, { replace: true });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [location, navigate]);

    function addEmployer() {
        navigate('/addEmployer');
    }
    function updateEmplyer(id) {
        navigate(`/updateEmployer/${id}`);
    }
    function deleteEmployer(id) {
        if (window.confirm('Are you sure you want to delete this employer?')) {
            if (id) {
                deleteEmployerService(id).then((response) => {
                    console.log(`Deleted employer with ID: ${id}`);
                    setEmployers(employers.filter((employer) => employer.id !== id));
                    console.log(response.data);
                }).catch(error => console.log(error));
                navigate("/employers",{
                    state: { message: "Employer Deleted successfully!",type :"danger" }});
                
            } else {
                navigate("/employers",{
                    state: { message: "the delete operation is echou",type :"danger"}});
            }
          
        }
    }



    return (
        <div className='centered-container'>
            {alertMessage && (
                <div className={`alert alert-${alertType} mt-5`}>
                    {alertMessage}
                </div>
            )}
            <h3 className='text-center mt-5 page-title'>List of Employers</h3>
            <button type="button" className="btn btn-primary mb-3 bounce" onClick={addEmployer}>Add Employer</button>
            <table className='table table-striped table-bordered custom-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employers.map((employer) =>
                            <tr key={employer.id}>
                                <td>{employer.id}</td>
                                <td>{employer.firstName}</td>
                                <td>{employer.lastName}</td>
                                <td>{employer.email}</td>
                                <td>{employer.age}</td>
                                {/* <td><button type="button" className="btn btn-info me-3 w-50" onClick={()=>updateEmplyer(employer.id)}><i className="bi bi-pencil-square"></i></button><button type="button" className="btn btn-danger w-49" onClick={()=>  deleteEmployer(employer.id)}><i className="bi bi-trash3"></i></button></td> */}
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-info w-50 me-2"
                                            onClick={() => updateEmplyer(employer.id)}
                                        >
                                            <i className="bi bi-pencil-square" style={{ color: "white" }}></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger w-50"
                                            onClick={() => deleteEmployer(employer.id)}
                                        >
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployers