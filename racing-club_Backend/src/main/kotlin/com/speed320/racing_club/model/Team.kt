package com.speed320.racing_club.model

import jakarta.persistence.*

@Entity
@Table(name = "team")
data class Team(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var name: String,

    var city: String? = null,
    @Column(name = "contact_info")
    var contactInfo: String? = null,
    @Column(name = "manager_name")
    var managerName: String? = null,
)
