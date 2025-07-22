package com.example.em.repository;

import com.example.em.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // No need to write any code here!
    // Spring Data JPA provides CRUD methods automatically.
}
