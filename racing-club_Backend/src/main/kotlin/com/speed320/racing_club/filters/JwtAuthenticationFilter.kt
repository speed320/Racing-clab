package com.speed320.racing_club.filters

import com.speed320.racing_club.config.JwtConfig
import com.speed320.racing_club.model.User
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import java.util.Date

class JwtAuthenticationFilter(
    private val authManager: AuthenticationManager,
    private val jwtConfig: JwtConfig
) : UsernamePasswordAuthenticationFilter() {

    init {
        super.setAuthenticationManager(authManager)
        setFilterProcessesUrl("/api/auth/login")
    }

    override fun attemptAuthentication(request: HttpServletRequest, response: HttpServletResponse): Authentication {
        val mapper = com.fasterxml.jackson.databind.ObjectMapper()
        val loginData = mapper.readTree(request.inputStream)
        val email = loginData.get("email").asText()
        val password = loginData.get("password").asText()

        val authToken = UsernamePasswordAuthenticationToken(email, password)
        return authManager.authenticate(authToken)
    }

    override fun successfulAuthentication(
        request: HttpServletRequest,
        response: HttpServletResponse,
        chain: FilterChain,
        authResult: Authentication
    ) {
        val user = authResult.principal as User
        val token = Jwts.builder()
            .setSubject(user.username)
            .claim("authorities", authResult.authorities)
            .setIssuedAt(Date())
            .setExpiration(Date(System.currentTimeMillis() + jwtConfig.expiration))
            .signWith(Keys.hmacShaKeyFor(jwtConfig.secret.toByteArray()))
            .compact()

        response.contentType = "application/json"
        response.characterEncoding = "UTF-8"
        response.writer.write("""{"token":"Bearer $token"}""")
        response.writer.flush()
    }
}