package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.EmployeeDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Employee
import com.speed320.racing_club.repository.EmployeeRepository
import com.speed320.racing_club.service.EmployeeService
import org.springframework.stereotype.Service

@Service
class EmployeeServiceImpl(
    private val employeeRepository: EmployeeRepository
) : AbstractCrudService<EmployeeDto, Long, Employee>(
    repository = employeeRepository,
    toDto = Employee::toDto,
    toEntity = EmployeeDto::toEntity,
    updateEntity = { entity, dto ->
        entity.fullname = dto.fullname
        entity.dateOfBirth = dto.dateOfBirth
        entity.passport = dto.passport
        entity.gender = dto.gender
        entity.placeOfLiving = dto.placeOfLiving
        entity.position = dto.position
    }
), EmployeeService