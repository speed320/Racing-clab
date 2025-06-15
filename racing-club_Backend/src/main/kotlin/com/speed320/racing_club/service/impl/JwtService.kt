package com.speed320.racing_club.service.impl

import com.speed320.racing_club.config.JwtConfig
import com.speed320.racing_club.model.User
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Service
import java.util.Date

@Service
class JwtService(
    private val jwtConfig: JwtConfig
) {
    fun generateToken(user: User): String {
        return Jwts.builder()
            .setSubject(user.email)
            .claim("authorities", user.authorities)
            .setIssuedAt(Date())
            .setExpiration(Date(System.currentTimeMillis() + jwtConfig.expiration))
            .setIssuer(jwtConfig.issuer)
            .signWith(Keys.hmacShaKeyFor(jwtConfig.secret.toByteArray()))
            .compact()
    }
}