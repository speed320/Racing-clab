package com.speed320.racing_club.model

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "Employee")
data class Employee(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var fullname: String,

    @Column(name = "date_of_birth", nullable = false)
    var dateOfBirth: LocalDate,

    @Column(nullable = false)
    var passport: String,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    var gender: Racer.Gender,
    @Column(name = "place_of_living")
    var placeOfLiving: String? = null,

    @Column(nullable = false)
    var position: String
)
