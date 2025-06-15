-- Team
CREATE TABLE team (
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      city VARCHAR(255),
                      contact_info VARCHAR(255),
                      manager_name VARCHAR(255)
);

-- Racer
CREATE TABLE racer (
                       id SERIAL PRIMARY KEY,
                       fullname VARCHAR(255) NOT NULL,
                       date_of_birth DATE NOT NULL,
                       category VARCHAR(255) NOT NULL,
                       license_number VARCHAR(255) UNIQUE NOT NULL,
                       contact_info VARCHAR(255),
                       gender VARCHAR(10) CHECK
                           (gender IN ('Male', 'Female', 'Other')) NOT NULL,
                       country VARCHAR(255) NOT NULL,
                       team_id INTEGER NOT NULL REFERENCES team(id),
                       photo TEXT
);

-- Race
CREATE TABLE race (
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
CREATE TABLE track (
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
CREATE TABLE track_race (
                            track_id INTEGER NOT NULL REFERENCES track(id),
                            race_id INTEGER NOT NULL REFERENCES race(id),
                            PRIMARY KEY (track_id, race_id)
);

-- Vehicle
CREATE TABLE vehicle (
                         id SERIAL PRIMARY KEY,
                         type VARCHAR(255) NOT NULL,
                         make VARCHAR(255) NOT NULL,
                         model VARCHAR(255) NOT NULL,
                         year INTEGER NOT NULL,
                         engine_number VARCHAR(255) NOT NULL,
                         racer_id INTEGER NOT NULL REFERENCES racer(id),
                         description TEXT
);

-- Employee
CREATE TABLE employee (
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
CREATE TABLE app_user (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        role VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        racer_id INTEGER REFERENCES racer(id),
                        employee_id INTEGER REFERENCES employee(id)
);

-- Rating
CREATE TABLE rating (
                        id_racer INTEGER NOT NULL REFERENCES racer(id),
                        id_race INTEGER NOT NULL REFERENCES race(id),
                        racer_place INTEGER NOT NULL,
                        racer_time TIME NOT NULL,
                        PRIMARY KEY (id_racer, id_race)
);



