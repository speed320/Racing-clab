package com.speed320.racing_club.model

import jakarta.persistence.*

@Entity
@Table(name = "track")
data class Track(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var name: String,

    var length: Float?=null,
    @Column(name = "turns_count")
    var turnsCount: Int? = null,
    @Column(name = "surface_type")
    var surfaceType: String? = null,
    var description: String? = null,
    var country: String? = null,
    var city: String? = null
)
