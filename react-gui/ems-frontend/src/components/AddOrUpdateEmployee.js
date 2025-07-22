import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddOrUpdateEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id).then((res) => {
        setEmployee(res.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (id) {
      EmployeeService.updateEmployee(employee,id).then(() => {
        navigate("/");
      });
    } else {
      EmployeeService.createEmployee(employee).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div>
      <h2>{id ? "Update" : "Add"} Employee</h2>
      <form onSubmit={saveOrUpdateEmployee}>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="First Name"
        /><br />
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        /><br />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <button type="submit">{id ? "Update" : "Add"} Employee</button>
      </form>
    </div>
  );
}

export default AddOrUpdateEmployee;
