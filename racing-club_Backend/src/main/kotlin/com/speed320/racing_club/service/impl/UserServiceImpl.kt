package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.UserDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.User
import com.speed320.racing_club.repository.EmployeeRepository
import com.speed320.racing_club.repository.RacerRepository
import com.speed320.racing_club.repository.UserRepository
import com.speed320.racing_club.service.UserService
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class UserServiceImpl(
    private val userRepository: UserRepository,
    private val racerRepository: RacerRepository,
    private val employeeRepository: EmployeeRepository,
    private val passwordEncoder: PasswordEncoder
) : AbstractCrudService<UserDto, Long, User>(
    repository = userRepository,
    toDto = User::toDto,
    toEntity = { dto ->
        val rawPassword = dto.password
            ?: throw IllegalArgumentException("Password is required for user creation")

        val racer = dto.racerId?.let { racerRepository.findById(it).orElse(null) }
        val employee = dto.employeeId?.let { employeeRepository.findById(it).orElse(null) }
        dto.toEntity(
            racerProvider = { racer },
            employeeProvider = { employee }
        ).apply {
            _password = passwordEncoder.encode(rawPassword)
        }
    },
    updateEntity = { entity, dto ->
        entity.name = dto.name
        entity.email = dto.email
        entity.role = dto.role

        dto.password
            ?.takeIf { it.isNotBlank() }
            ?.let { newRaw ->
                entity._password = passwordEncoder.encode(newRaw)
            }

        entity.racer = dto.racerId?.let { racerRepository.findById(it).orElse(null) }
        entity.employee = dto.employeeId?.let { employeeRepository.findById(it).orElse(null) }
    }
), UserService
