package com.speed320.racing_club.models

import jakarta.persistence.*

@Entity
@Table(name = "Team")
data class Team(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val name: String,

    val city: String? = null,
    val contactInfo: String? = null,
    val managerName: String? = null,
)
