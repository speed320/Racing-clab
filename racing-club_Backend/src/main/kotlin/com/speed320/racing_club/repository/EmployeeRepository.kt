package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Employee
import org.springframework.data.jpa.repository.JpaRepository

interface EmployeeRepository : JpaRepository<Employee, Long> {
}