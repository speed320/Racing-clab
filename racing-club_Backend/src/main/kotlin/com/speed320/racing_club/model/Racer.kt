package com.speed320.racing_club.model

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "racer")
data class Racer(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "fullname", nullable = false)
    var fullName: String,

    @Column(name = "date_of_birth",nullable = false)
    var dateOfBirth: LocalDate,

    @Column(nullable = false)
    var category: String,

    @Column(name = "license_number", nullable = false, unique = true)
    var licenseNumber: String,

    @Column(name = "contact_info")
    var contactInfo: String? = null,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    var gender: Gender,

    @Column(nullable = false)
    var country: String,

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    var team: Team,

    var photo: String? = null,
) {
    enum class Gender {
        Male, Female, Other
    }
}
