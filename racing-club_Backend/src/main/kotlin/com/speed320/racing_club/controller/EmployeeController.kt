package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.EmployeeDto
import com.speed320.racing_club.service.EmployeeService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/employees")
class EmployeeController(
    private val employeeService: EmployeeService
) {

    @PostMapping
    fun createEmployee(@RequestBody dto: EmployeeDto): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.create(dto))
    }

    @GetMapping("/{id}")
    fun getEmployee(@PathVariable id: Long): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.getById(id))
    }

    @GetMapping
    fun getAllEmployees(): ResponseEntity<List<EmployeeDto>> {
        return ResponseEntity.ok(employeeService.getAll())
    }

    @PutMapping("/{id}")
    fun updateEmployee(
        @PathVariable id: Long,
        @RequestBody dto: EmployeeDto
    ): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.update(id, dto))
    }

    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(employeeService.delete(id))
    }
}