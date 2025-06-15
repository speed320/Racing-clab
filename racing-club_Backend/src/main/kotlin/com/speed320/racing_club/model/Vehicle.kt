package com.speed320.racing_club.model

import jakarta.persistence.*

@Entity
@Table(name = "vehicle")
data class Vehicle(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var type: String,

    @Column(nullable = false)
    var make: String,

    @Column(nullable = false)
    var model: String,

    @Column(nullable = false)
    var year: Int,

    @Column(name = "engine_number", nullable = false)
    var engineNumber: String,

    @ManyToOne
    @JoinColumn(name = "racer_id", nullable = false)
    var racer: Racer,

    var description: String? = null
)
