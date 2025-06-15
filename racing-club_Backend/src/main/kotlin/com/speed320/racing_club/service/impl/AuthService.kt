package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.LoginDto
import com.speed320.racing_club.dto.RegisterDto
import com.speed320.racing_club.model.User
import com.speed320.racing_club.repository.UserRepository
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
    private val authManager: AuthenticationManager,
    private val jwtService: JwtService
) {

    fun register(dto: RegisterDto) {
        val user = User(
            email = dto.email,
            _password = passwordEncoder.encode(dto.password),
            role = dto.role,
            name = dto.name
        )
        userRepository.save(user)
    }

    fun login(dto: LoginDto): String {
        val authentication = authManager.authenticate(
            UsernamePasswordAuthenticationToken(dto.email, dto.password)
        )

        val userDetails = authentication.principal as? UserDetails
            ?: throw IllegalStateException("Authentication failed: principal is not UserDetails")

        val user = userRepository.findByEmail(userDetails.username)
            ?: throw IllegalStateException("User not found in database after authentication")

        return jwtService.generateToken(user)
    }
}
