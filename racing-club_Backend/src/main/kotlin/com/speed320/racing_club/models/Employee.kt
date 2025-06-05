package com.speed320.racing_club.models

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "Employee")
data class Employee(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val fullname: String,

    @Column(nullable = false)
    val dateOfBirth: LocalDate,

    @Column(nullable = false)
    val passport: String,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    val gender: Racer.Gender,

    val placeOfLiving: String? = null,

    @Column(nullable = false)
    val position: String
)
