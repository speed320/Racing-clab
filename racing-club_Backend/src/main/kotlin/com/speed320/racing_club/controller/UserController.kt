package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.UserDto
import com.speed320.racing_club.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
class UserController(
    private val userService: UserService
) {

    @PostMapping
    fun createUser(@RequestBody dto: UserDto): ResponseEntity<UserDto> {
        return ResponseEntity.ok(userService.create(dto))
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: Long): ResponseEntity<UserDto> {
        return ResponseEntity.ok(userService.getById(id))
    }

    @GetMapping
    fun getAllUsers(): ResponseEntity<List<UserDto>> {
        return ResponseEntity.ok(userService.getAll())
    }

    @PutMapping("/{id}")
    fun updateUser(
        @PathVariable id: Long,
        @RequestBody dto: UserDto
    ): ResponseEntity<UserDto> {
        return ResponseEntity.ok(userService.update(id, dto))
    }

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(userService.delete(id))
    }
}