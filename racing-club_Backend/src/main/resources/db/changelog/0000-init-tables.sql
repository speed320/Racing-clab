-- Team
CREATE TABLE Team (
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      city VARCHAR(255),
                      contact_info VARCHAR(255),
                      manager_name VARCHAR(255)
);

-- Racer
CREATE TABLE Racer (
                       id SERIAL PRIMARY KEY,
                       fullname VARCHAR(255) NOT NULL,
                       date_of_birth DATE NOT NULL,
                       category VARCHAR(255) NOT NULL,
                       license_number VARCHAR(255) UNIQUE NOT NULL,
                       contact_info VARCHAR(255),
                       gender VARCHAR(10) CHECK
                           (gender IN ('Male', 'Female', 'Other')) NOT NULL,
                       country VARCHAR(255) NOT NULL,
                       team_id INTEGER NOT NULL REFERENCES Team(id),
                       photo TEXT
);

-- Race
CREATE TABLE Race (
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      date DATE NOT NULL,
                      location VARCHAR(255),
                      type VARCHAR(255) NOT NULL,
                      distance FLOAT,
                      description TEXT,
                      place VARCHAR(255),
                      time TIME
);

-- Track
CREATE TABLE Track (
                       id SERIAL PRIMARY KEY,
                       name VARCHAR(255) NOT NULL,
                       length FLOAT,
                       turns_count INTEGER,
                       surface_type VARCHAR(255),
                       description TEXT,
                       country VARCHAR(255),
                       city VARCHAR(255)
);

-- Track_Race
CREATE TABLE Track_Race (
                            track_id INTEGER NOT NULL REFERENCES Track(id),
                            race_id INTEGER NOT NULL REFERENCES Race(id),
                            PRIMARY KEY (track_id, race_id)
);

-- Vehicle
CREATE TABLE Vehicle (
                         id SERIAL PRIMARY KEY,
                         type VARCHAR(255) NOT NULL,
                         make VARCHAR(255) NOT NULL,
                         model VARCHAR(255) NOT NULL,
                         year INTEGER NOT NULL,
                         engine_number VARCHAR(255) NOT NULL,
                         racer_id INTEGER NOT NULL REFERENCES Racer(id),
                         description TEXT
);

-- Employee
CREATE TABLE Employee (
                          id SERIAL PRIMARY KEY,
                          fullname VARCHAR(255) NOT NULL,
                          date_of_birth DATE NOT NULL,
                          passport VARCHAR(255) NOT NULL,
                          gender VARCHAR(10) CHECK
                              (gender IN ('Male', 'Female', 'Other')) NOT NULL,
                          place_of_living VARCHAR(255),
                          position VARCHAR(255) NOT NULL
);


-- "User"
CREATE TABLE "User" (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        role VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        racer_id INTEGER REFERENCES Racer(id),
                        employee_id INTEGER REFERENCES Employee(id)
);

-- Rating
CREATE TABLE Rating (
                        id_racer INTEGER NOT NULL REFERENCES Racer(id),
                        id_race INTEGER NOT NULL REFERENCES Race(id),
                        racer_place INTEGER NOT NULL,
                        racer_time TIME NOT NULL,
                        PRIMARY KEY (id_racer, id_race)
);



