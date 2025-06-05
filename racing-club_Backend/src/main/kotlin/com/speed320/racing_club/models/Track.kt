package com.speed320.racing_club.models

import jakarta.persistence.*

@Entity
@Table(name = "Track")
data class Track(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val name: String,

    val length: Float?=null,
    val turnsCount: Int? = null,
    val surfaceType: String? = null,
    val description: String? = null,
    val country: String? = null,
    val city: String? = null
)
