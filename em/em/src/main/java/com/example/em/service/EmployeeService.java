package com.example.em.service;

import com.example.em.model.Employee;
import java.util.List;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    Employee saveEmployee(Employee employee);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Employee employee);

    void deleteEmployeeById(Long id);
}
