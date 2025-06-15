package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.LoginDto
import com.speed320.racing_club.dto.RegisterDto
import com.speed320.racing_club.service.impl.AuthService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/auth")
class AuthController(
    private val authService: AuthService
) {
    @PostMapping("/register")
    fun register(@RequestBody dto: RegisterDto): ResponseEntity<String> {
        authService.register(dto)
        return ResponseEntity.ok("User registered successfully")
    }

    @PostMapping("/login")
    fun login(@RequestBody dto: LoginDto): ResponseEntity<String> {
        val token = authService.login(dto)
        return ResponseEntity.ok(token)
    }
}