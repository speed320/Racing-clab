import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { EntityType, PermissionAction } from '../permissions';

export default function Navbar() {
    const { token, logout, hasPermission } = useContext(AuthContext);
    const nav = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">Racing Club</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        {hasPermission(EntityType.EMPLOYEE, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/employees">Employees</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.RACER, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/racers">Racers</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.TEAM, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/teams">Teams</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.RACE, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/races">Races</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.TRACK, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tracks">Tracks</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.VEHICLE, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/vehicles">Vehicles</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.RATING, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ratings">Ratings</NavLink>
                            </li>
                        )}
                        {hasPermission(EntityType.USER, PermissionAction.READ) && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                        )}
                    </ul>

                    {token && (
                        <button
                            className="btn btn-outline-light ms-auto"
                            onClick={() => { logout(); nav('/login'); }}
                        >
                            Выйти
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
