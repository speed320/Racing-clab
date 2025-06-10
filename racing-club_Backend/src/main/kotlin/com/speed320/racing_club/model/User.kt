package com.speed320.racing_club.model

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

@Entity
@Table(name = "\"User\"")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var name: String,

    @Column(name = "password", nullable = false)
    var _password: String,

    @Column(nullable = false)
    var role: String,

    @Column(nullable = false, unique = true)
    var email: String,

    @OneToOne
    @JoinColumn(name = "racer_id")
    var racer: Racer? = null,

    @OneToOne
    @JoinColumn(name = "employee_id")
    var employee: Employee? = null
) : UserDetails {
    override fun getAuthorities(): Collection<GrantedAuthority> {
        return listOf(SimpleGrantedAuthority("ROLE_$role"))
    }

    override fun getUsername(): String = email
    override fun getPassword(): String = _password
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isEnabled(): Boolean = true
}
