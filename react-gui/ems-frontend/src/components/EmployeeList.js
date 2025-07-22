// EmployeeList.js
import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      fetchEmployees(); // refresh the list
    });
  };

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <button onClick={addEmployee} className="btn btn-primary mb-2">
        Add Employee
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button onClick={() => editEmployee(emp.id)} className="btn btn-info">
                  Edit
                </button>{" "}
                <button onClick={() => deleteEmployee(emp.id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
