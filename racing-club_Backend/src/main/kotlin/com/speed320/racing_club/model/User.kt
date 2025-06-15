package com.speed320.racing_club.model

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

@Entity
@Table(name = "app_user")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var name: String,

    @Column(name = "password", nullable = false)
    var _password: String,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    var role: Role,

    @Column(nullable = false, unique = true)
    var email: String,

    @OneToOne
    @JoinColumn(name = "racer_id")
    var racer: Racer? = null,

    @OneToOne
    @JoinColumn(name = "employee_id")
    var employee: Employee? = null
) : UserDetails {

    @Transient
    private var _authorities: Collection<GrantedAuthority> = emptyList()

    override fun getAuthorities(): Collection<GrantedAuthority> = _authorities

    fun setAuthorities(authorities: Collection<GrantedAuthority>) {
        this._authorities = authorities
    }

    override fun getUsername(): String = email
    override fun getPassword(): String = _password
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isEnabled(): Boolean = true
}

enum class Role {
    Admin, Organizer, Racer
}
