package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.EmployeeDto
import com.speed320.racing_club.service.EmployeeService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/employees")
class EmployeeController(
    private val employeeService: EmployeeService
) {

    @PreAuthorize("hasAnyRole('Admin')")
    @PostMapping
    fun createEmployee(@RequestBody dto: EmployeeDto): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.create(dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping("/{id}")
    fun getEmployee(@PathVariable id: Long): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.getById(id))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping
    fun getAllEmployees(): ResponseEntity<List<EmployeeDto>> {
        return ResponseEntity.ok(employeeService.getAll())
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @PutMapping("/{id}")
    fun updateEmployee(
        @PathVariable id: Long,
        @RequestBody dto: EmployeeDto
    ): ResponseEntity<EmployeeDto> {
        return ResponseEntity.ok(employeeService.update(id, dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(employeeService.delete(id))
    }
}