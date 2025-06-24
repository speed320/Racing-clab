import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginPage from './page/LoginPage';
import Navbar from './component/Navbar';
import EmployeesPage from './page/EmployeesPage';
import RacersPage from './page/RacersPage';
import TeamsPage from './page/TeamsPage';
import RacesPage from './page/RacesPage';
import TracksPage from './page/TracksPage';
import VehiclesPage from './page/VehiclesPage';
import RatingsPage from './page/RatingsPage';
import UsersPage from "./page/UsersPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeFormPage from "./form/EmployeeFormPage";
import RacerFormPage from "./form/RacerFormPage";
import TeamFormPage from "./form/TeamFormPage";
import RaceFormPage from "./form/RaceFormPage";
import TrackFormPage from "./form/TrackFormPage";
import VehicleFormPage from "./form/VehicleFormPage";
import RatingFormPage from "./form/RatingFormPage";
import UserFormPage from "./form/UserFormPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />

                        <Route path="/employees" element={
                            <ProtectedRoute>
                                <EmployeesPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/employees/add" element={
                            <ProtectedRoute>
                                <EmployeeFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/employees/edit/:id" element={
                            <ProtectedRoute>
                                <EmployeeFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/racers" element={
                            <ProtectedRoute>
                                <RacersPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/racers/add" element={
                            <ProtectedRoute>
                                <RacerFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/racers/edit/:id" element={
                            <ProtectedRoute>
                                <RacerFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/teams" element={
                            <ProtectedRoute>
                                <TeamsPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/teams/add" element={
                            <ProtectedRoute>
                                <TeamFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/teams/edit/:id" element={
                            <ProtectedRoute>
                                <TeamFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/races" element={
                            <ProtectedRoute>
                                <RacesPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/races/add" element={
                            <ProtectedRoute>
                                <RaceFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/races/edit/:id" element={
                            <ProtectedRoute>
                                <RaceFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/tracks" element={
                            <ProtectedRoute>
                                <TracksPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/tracks/add" element={
                            <ProtectedRoute>
                                <TrackFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/tracks/edit/:id" element={
                            <ProtectedRoute>
                                <TrackFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/vehicles" element={
                            <ProtectedRoute>
                                <VehiclesPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/vehicles/add" element={
                            <ProtectedRoute>
                                <VehicleFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/vehicles/edit/:id" element={
                            <ProtectedRoute>
                                <VehicleFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/ratings" element={
                            <ProtectedRoute>
                                <RatingsPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/ratings/add" element={
                            <ProtectedRoute>
                                <RatingFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/ratings/edit/:racerId/:raceId" element={
                            <ProtectedRoute>
                                <RatingFormPage />
                            </ProtectedRoute>
                        } />

                        <Route path="/users" element={
                            <ProtectedRoute>
                                <UsersPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/users/add" element={
                            <ProtectedRoute>
                                <UserFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/users/edit/:id" element={
                            <ProtectedRoute>
                                <UserFormPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/" element={
                            <ProtectedRoute>
                                <EmployeesPage />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
