package com.speed320.racing_club.models

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "Racer")
data class Racer(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val fullName: String,

    @Column(nullable = false)
    val dateOfBirth: LocalDate,

    @Column(nullable = false)
    val category: String,

    @Column(nullable = false, unique = true)
    val licenseNumber: String,

    val contactInfo: String? = null,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    val gender: Gender,

    @Column(nullable = false)
    val country: String,

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    val team: Team,

    val photo: String? = null,
) {
    enum class Gender {
        MALE, FEMALE, OTHER
    }
}
