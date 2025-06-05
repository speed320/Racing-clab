package com.speed320.racing_club.models

import jakarta.persistence.*

@Entity
@Table(name = "Vehicle")
data class Vehicle(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val type: String,

    @Column(nullable = false)
    val make: String,

    @Column(nullable = false)
    val model: String,

    @Column(nullable = false)
    val year: Int,

    @Column(nullable = false)
    val engineNumber: String,

    @ManyToOne
    @JoinColumn(name = "racer_id", nullable = false)
    val racer: Racer,

    val description: String? = null
)
