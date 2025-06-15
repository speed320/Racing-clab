-- Заполнение таблицы Team
INSERT INTO team (name, city, contact_info, manager_name) VALUES
('Red Bull Racing', 'Milton Keynes', 'info@redbullracing.com', 'Christian Horner'),
('Mercedes-AMG Petronas', 'Brackley', 'info@mercedesamgf1.com', 'Toto Wolff'),
('Ferrari', 'Maranello', 'info@ferrari.com', 'Frédéric Vasseur'),
('McLaren Racing', 'Woking', 'info@mclaren.com', 'Zak Brown'),
('Alpine F1 Team', 'Enstone', 'info@alpinef1.com', 'Otmar Szafnauer'),
('Aston Martin F1 Team', 'Silverstone', 'info@astonmartinf1.com', 'Mike Krack'),
('Alfa Romeo Racing', 'Hinwil', 'info@alfaromeoracing.com', 'Andreas Seidl'),
('AlphaTauri', 'Faenza', 'info@alphatauri.com', 'Franz Tost'),
('Haas F1 Team', 'Kannapolis', 'info@haasf1team.com', 'Guenther Steiner'),
('Williams Racing', 'Grove', 'info@williamsf1.com', 'James Vowles'),
('Team Penske', 'Mooresville', 'info@teampenske.com', 'Roger Penske'),
('Andretti Autosport', 'Indianapolis', 'info@andrettiautosport.com', 'Michael Andretti');

-- Заполнение таблицы Racer
INSERT INTO racer (fullname, date_of_birth, category, license_number, contact_info, gender, country, team_id, photo) VALUES
('Max Verstappen', '1997-09-30', 'Professional', 'VER33', 'max@redbullracing.com', 'Male', 'Netherlands', 1, 'max_verstappen.jpg'),
('Lewis Hamilton', '1985-01-07', 'Professional', 'HAM44', 'lewis@mercedesamgf1.com', 'Male', 'United Kingdom', 2, 'lewis_hamilton.jpg'),
('Charles Leclerc', '1997-10-16', 'Professional', 'LEC16', 'charles@ferrari.com', 'Male', 'Monaco', 3, 'charles_leclerc.jpg'),
('Lando Norris', '1999-11-13', 'Professional', 'NOR4', 'lando@mclaren.com', 'Male', 'United Kingdom', 4, 'lando_norris.jpg'),
('Fernando Alonso', '1981-07-29', 'Professional', 'ALO14', 'fernando@alpinef1.com', 'Male', 'Spain', 5, 'fernando_alonso.jpg'),
('Sebastian Vettel', '1987-07-03', 'Professional', 'VET5', 'sebastian@astonmartinf1.com', 'Male', 'Germany', 6, 'sebastian_vettel.jpg'),
('Valtteri Bottas', '1989-08-28', 'Professional', 'BOT77', 'valtteri@alfaromeoracing.com', 'Male', 'Finland', 7, 'valtteri_bottas.jpg'),
('Pierre Gasly', '1996-02-07', 'Professional', 'GAS10', 'pierre@alphatauri.com', 'Male', 'France', 8, 'pierre_gasly.jpg'),
('Kevin Magnussen', '1992-10-05', 'Professional', 'MAG20', 'kevin@haasf1team.com', 'Male', 'Denmark', 9, 'kevin_magnussen.jpg'),
('Alexander Albon', '1996-03-23', 'Professional', 'ALB23', 'alexander@williamsf1.com', 'Male', 'Thailand', 10, 'alexander_albon.jpg'),
('Josef Newgarden', '1990-12-22', 'Professional', 'NEW2', 'josef@teampenske.com', 'Male', 'USA', 11, 'josef_newgarden.jpg'),
('Colton Herta', '2000-03-30', 'Professional', 'HER26', 'colton@andrettiautosport.com', 'Male', 'USA', 12, 'colton_herta.jpg'),
('Carlos Sainz Jr.', '1994-09-01', 'Professional', 'SAI55', 'carlos@ferrari.com', 'Male', 'Spain', 3, 'carlos_sainz.jpg'),
('Sergio Perez', '1990-01-26', 'Professional', 'PER11', 'sergio@redbullracing.com', 'Male', 'Mexico', 1, 'sergio_perez.jpg'),
('Daniel Ricciardo', '1989-07-01', 'Professional', 'RIC3', 'daniel@mclaren.com', 'Male', 'Australia', 4, 'daniel_ricciardo.jpg');

-- Заполнение таблицы Race
INSERT INTO race (name, date, location, type, distance, description, place, time) VALUES
('Australian Grand Prix', '2024-03-24', 'Melbourne', 'Formula 1', 307.574, 'Opening race of the season', 'Melbourne Grand Prix Circuit', '14:00:00'),
('Bahrain Grand Prix', '2024-03-03', 'Sakhir', 'Formula 1', 308.238, 'Night race in the desert', 'Bahrain International Circuit', '18:00:00'),
('Saudi Arabian Grand Prix', '2024-03-09', 'Jeddah', 'Formula 1', 308.45, 'Fast street circuit', 'Jeddah Street Circuit', '20:00:00'),
('Azerbaijan Grand Prix', '2024-04-28', 'Baku', 'Formula 1', 306.049, 'Street circuit with long straights', 'Baku City Circuit', '15:00:00'),
('Miami Grand Prix', '2024-05-05', 'Miami Gardens', 'Formula 1', 308.326, 'New circuit in Miami', 'Miami International Autodrome', '15:30:00'),
('Monaco Grand Prix', '2024-05-26', 'Monte Carlo', 'Formula 1', 260.286, 'Iconic street circuit', 'Circuit de Monaco', '15:00:00'),
('Indy 500', '2024-05-26', 'Indianapolis', 'IndyCar', 500, 'The Greatest Spectacle in Racing', 'Indianapolis Motor Speedway', '12:45:00'),
('Canadian Grand Prix', '2024-06-09', 'Montreal', 'Formula 1', 305.27, 'Fast circuit with walls', 'Circuit Gilles Villeneuve', '14:00:00'),
('British Grand Prix', '2024-07-07', 'Silverstone', 'Formula 1', 306.198, 'Historic circuit in the UK', 'Silverstone Circuit', '15:00:00'),
('Hungarian Grand Prix', '2024-07-21', 'Mogyorod', 'Formula 1', 306.63, 'Tight and twisty circuit', 'Hungaroring', '15:00:00'),
('Belgian Grand Prix', '2024-07-28', 'Spa-Francorchamps', 'Formula 1', 308.052, 'Challenging circuit with Eau Rouge', 'Circuit de Spa-Francorchamps', '15:00:00'),
('Italian Grand Prix', '2024-09-01', 'Monza', 'Formula 1', 306.72, 'Temple of Speed', 'Monza Circuit', '15:00:00');

-- Заполнение таблицы Track
INSERT INTO track (name, length, turns_count, surface_type, description, country, city) VALUES
('Melbourne Grand Prix Circuit', 5.303, 16, 'Asphalt', 'Semi-street circuit', 'Australia', 'Melbourne'),
('Bahrain International Circuit', 5.412, 15, 'Asphalt', 'Modern circuit in the desert', 'Bahrain', 'Sakhir'),
('Jeddah Street Circuit', 6.174, 27, 'Asphalt', 'Fast and flowing street circuit', 'Saudi Arabia', 'Jeddah'),
('Baku City Circuit', 6.003, 20, 'Asphalt', 'Street circuit with long straights', 'Azerbaijan', 'Baku'),
('Miami International Autodrome', 5.41, 19, 'Asphalt', 'Circuit around Hard Rock Stadium', 'USA', 'Miami Gardens'),
('Circuit de Monaco', 3.337, 19, 'Asphalt', 'Narrow and historic street circuit', 'Monaco', 'Monte Carlo'),
('Indianapolis Motor Speedway', 2.5, 4, 'Asphalt/Brick', 'Home of the Indy 500', 'USA', 'Indianapolis'),
('Circuit Gilles Villeneuve', 4.361, 14, 'Asphalt', 'Fast circuit with the Wall of Champions', 'Canada', 'Montreal'),
('Silverstone Circuit', 5.891, 18, 'Asphalt', 'Historic and fast circuit', 'United Kingdom', 'Silverstone'),
('Hungaroring', 4.381, 14, 'Asphalt', 'Tight and twisty circuit', 'Hungary', 'Mogyorod'),
('Circuit de Spa-Francorchamps', 7.004, 19, 'Asphalt', 'Challenging circuit with Eau Rouge', 'Belgium', 'Spa'),
('Monza Circuit', 5.793, 11, 'Asphalt', 'Temple of Speed', 'Italy', 'Monza');

-- Заполнение таблицы Track_Race
INSERT INTO track_race (track_id, race_id) VALUES
(1, 1),  -- Australian GP на Melbourne
(2, 2),  -- Bahrain GP на Sakhir
(3, 3),  -- Saudi Arabian GP на Jeddah
(4, 4),  -- Azerbaijan GP на Baku
(5, 5),  -- Miami GP на Miami
(6, 6),  -- Monaco GP на Monte Carlo
(7, 7),  -- Indy 500 на Indianapolis
(8, 8),  -- Canadian GP на Montreal
(9, 9),  -- British GP на Silverstone
(10, 10), -- Hungarian GP на Hungaroring
(11, 11), -- Belgian GP на Spa
(12, 12), -- Italian GP на Monza
(1, 8),  -- Canadian GP на Melbourne (альтернативный вариант)
(2, 9),  -- British GP на Sakhir (альтернативный вариант)
(3, 10), -- Hungarian GP на Jeddah (альтернативный вариант)
(4, 11), -- Belgian GP на Baku (альтернативный вариант)
(5, 12), -- Italian GP на Miami (альтернативный вариант)
(6, 1),  -- Australian GP на Monte Carlo (альтернативный вариант)
(7, 2),  -- Bahrain GP на Indianapolis (альтернативный вариант)
(8, 3);  -- Saudi Arabian GP на Montreal (альтернативный вариант)

-- Заполнение таблицы Vehicle
INSERT INTO vehicle (type, make, model, year, engine_number, racer_id, description) VALUES
('Formula 1', 'Red Bull', 'RB19', 2023, 'RB19-01', 1, 'Max Verstappens car'),
('Formula 1', 'Mercedes', 'W14', 2023, 'W14-02', 2, 'Lewis Hamiltons car'),
('Formula 1', 'Ferrari', 'SF-23', 2023, 'SF23-03', 3, 'Charles Leclers car'),
('Formula 1', 'McLaren', 'MCL60', 2023, 'MCL60-04', 4, 'Lando Norriss car'),
('Formula 1', 'Alpine', 'A523', 2023, 'A523-05', 5, 'Fernando Alonsos car'),
('Formula 1', 'Aston Martin', 'AMR23', 2023, 'AMR23-06', 6, 'Sebastian Vettels car'),
('Formula 1', 'Alfa Romeo', 'C43', 2023, 'C43-07', 7, 'Valtteri Bottass car'),
('Formula 1', 'AlphaTauri', 'AT04', 2023, 'AT04-08', 8, 'Pierre Gaslys car'),
('Formula 1', 'Haas', 'VF-23', 2023, 'VF23-09', 9, 'Kevin Magnussens car'),
('Formula 1', 'Williams', 'FW45', 2023, 'FW45-10', 10, 'Alexander Albons car'),
('IndyCar', 'Dallara', 'DW12', 2023, 'DW12-11', 11, 'Josef Newgardens car'),
('IndyCar', 'Dallara', 'DW12', 2023, 'DW12-12', 12, 'Colton Hertas car'),
('Formula 1', 'Ferrari', 'SF-23', 2023, 'SF23-13', 13, 'Carlos Sainzs car'),
('Formula 1', 'Red Bull', 'RB19', 2023, 'RB19-14', 14, 'Sergio Perezs car'),
('Formula 1', 'McLaren', 'MCL60', 2023, 'MCL60-15', 15, 'Daniel Ricciardos car');

-- Заполнение таблицы Employee (15 записей)
INSERT INTO employee (fullname, date_of_birth, passport, gender, place_of_living, position) VALUES
('John Smith', '1980-05-10', 'AB1234567', 'Male', 'London', 'Race Organizer'),
('Alice Johnson', '1985-12-01', 'CD7890123', 'Female', 'New York', 'Chief Mechanic'),
('Bob Williams', '1975-03-15', 'EF3456789', 'Male', 'Paris', 'Team Manager'),
('Emily Brown', '1990-08-22', 'GH9012345', 'Female', 'Berlin', 'Data Analyst'),
('David Lee', '1982-06-04', 'IJ5678901', 'Male', 'Tokyo', 'Aerodynamicist'),
('Sarah Kim', '1988-09-18', 'KL1234567', 'Female', 'Seoul', 'Engine Specialist'),
('Michael Davis', '1970-11-29', 'MN7890123', 'Male', 'Rome', 'Strategist'),
('Jessica Wilson', '1992-04-07', 'OP3456789', 'Female', 'Madrid', 'Marketing Manager'),
('Kevin Garcia', '1983-01-12', 'QR9012345', 'Male', 'Mexico City', 'Pit Crew Chief'),
('Ashley Rodriguez', '1995-07-03', 'ST5678901', 'Female', 'Sao Paulo', 'Logistics Coordinator'),
('Brian Martinez', '1978-02-28', 'UV1234567', 'Male', 'Sydney', 'Financial Manager'),
('Linda Anderson', '1987-10-05', 'WX7890123', 'Female', 'Toronto', 'Legal Counsel'),
('Chris Thomas', '1991-03-20', 'YZ3456789', 'Male', 'Moscow', 'Communications Director'),
('Megan Jackson', '1984-06-15', 'AA9012345', 'Female', 'Johannesburg', 'Human Resources Manager'),
('Jason White', '1972-09-08', 'BB5678901', 'Male', 'Cairo', 'Security Chief');

-- Заполнение таблицы "User"
INSERT INTO app_user (name, password, role, email, racer_id, employee_id) VALUES
('maxverstappen', '$2a$10$LDLCRDNcU5dKB0nlP3jeKOcZQenGJNLDTKW.3CW8zBf5CwVdiXI7C', 'Racer', 'max@redbullracing.com', 1, NULL), -- pass: password123
('lewishamilton', '$2a$10$yAEC0RFZ.ubNin/7Jczdj.gYE0bMihazuxxwUfGc4OOL9UX2H1RD.', 'Racer', 'lewis@mercedesamgf1.com', 2, NULL), -- pass: securepass
('charlesleclerc', '$2a$10$btRh5uH9GqrhwTY7/FhWPu0u0GYZQMdpd1LZYVz91v8Twyj0JmDti', 'Racer', 'charles@ferrari.com', 3, NULL), -- pass: monacopass
('landonorris', '$2a$10$uhJ4gQncqA6K9hNUBEpsOuJMf4ZQ/L3Jgzpjtcy/x/qeZ5ZgB/tQO', 'Racer', 'lando@mclaren.com', 4, NULL), -- pass: norris44
('fernandoalonso', '$2a$10$awCwRIuPrvqgwKFUaUyhIuHgor2Ibnb9EzNSYjJlp47hB1fnfEB9m', 'Racer', 'fernando@alpinef1.com', 5, NULL), -- pass: elplan
('sebvettel', '$2a$10$IEiYt0d10YvbBwGGKmPMvuMMR7x2PeEEDouf..rv1m2FVFQRoRju.', 'Racer', 'sebastian@astonmartinf1.com', 6, NULL), -- pass: vettel5
('valtteribottas', '$2a$10$NBjCfD0ux4yw7kO09sWT8e0MpOeYM2V51bbLtxeXvbkrzXV3hOuiy', 'Racer', 'valtteri@alfaromeoracing.com', 7, NULL), -- pass: bottas77
('pierregasly', '$2a$10$PxZPG5xzBJ3MRRJ/SKrZO.f.4oV4budgj3qcXJhcOkkv1tkuGloa2', 'Racer', 'pierre@alphatauri.com', 8, NULL), -- pass: gasly10
('kevinmagnussen', '$2a$10$tp3HlOREOEGRkjh.b56nmuZX3/QpdSY3sY7V92RmQHEzfF/RHcvUS', 'Racer', 'kevin@haasf1team.com', 9, NULL), -- pass: kmag20
('alexalbon', '$2a$10$xqjGsWCn8mbiJPtWfZL1TuAPjcZszGAMUOWJuYwwy6J5T4Lqx3WVW', 'Racer', 'alexander@williamsf1.com', 10, NULL), -- pass: albon23
('josefnewgarden', '$2a$10$Q4DmnnxjJRKV0ZZh4js8teiRUanvxQ/ZF5ji9Wi/HWWrZIJlY52lC', 'Racer', 'josef@teampenske.com', 11, NULL), -- pass: indycar2
('coltonherta', '$2a$10$vnoMTb7WD4KdVk2/ZNrS8.6.K9VIO4pEDgpbQCSK9KAaMx/1xd2DC', 'Racer', 'colton@andrettiautosport.com', 12, NULL), --pass: herta26
('adminuser', '$2a$10$p4iBiqrS/lWZNTSQ/87eSOSkOqQVKo2KH8dBl3NsZ1s8rskfQgNz6', 'Admin', 'admin@racingclub.com', NULL, NULL), -- pass: adminpass
('organizer1', '$2a$10$l4ta0ann81NX2ekm5vNqa.rARLF..fQzv9gdxBihAc.1DaltNaOXe', 'Organizer', 'organizer1@racingclub.com', NULL, 1); --pass: orgpass


-- Заполнение таблицы Rating
INSERT INTO rating (id_racer, id_race, racer_place, racer_time) VALUES
(1, 1, 1, '01:30:00'), -- Max Verstappen, Australian GP, 1st
(2, 1, 2, '01:30:15'), -- Lewis Hamilton, Australian GP, 2nd
(3, 1, 3, '01:30:30'), -- Charles Leclerc, Australian GP, 3rd
(1, 2, 1, '01:28:00'), -- Max Verstappen, Bahrain GP, 1st
(2, 2, 2, '01:28:20'), -- Lewis Hamilton, Bahrain GP, 2nd
(4, 2, 3, '01:29:00'), -- Lando Norris, Bahrain GP, 3rd
(3, 3, 1, '01:32:00'), -- Charles Leclerc, Saudi Arabian GP, 1st
(1, 3, 2, '01:32:10'), -- Max Verstappen, Saudi Arabian GP, 2nd
(5, 3, 3, '01:33:00'), -- Fernando Alonso, Saudi Arabian GP, 3rd
(1, 4, 1, '01:40:00'), -- Max Verstappen, Azerbaijan GP, 1st
(2, 4, 2, '01:40:10'), -- Lewis Hamilton, Azerbaijan GP, 2nd
(6, 4, 3, '01:41:00'), -- Sebastian Vettel, Azerbaijan GP, 3rd
(1, 5, 1, '01:35:00'), -- Max Verstappen, Miami GP, 1st
(2, 5, 2, '01:35:20'), -- Lewis Hamilton, Miami GP, 2nd
(7, 5, 3, '01:36:00'), -- Valtteri Bottas, Miami GP, 3rd
(1, 6, 1, '01:50:00'), -- Max Verstappen, Monaco GP, 1st
(2, 6, 2, '01:50:30'), -- Lewis Hamilton, Monaco GP, 2nd
(8, 6, 3, '01:51:00'), -- Pierre Gasly, Monaco GP, 3rd
(11, 7, 1, '03:00:00'), -- Josef Newgarden, Indy 500, 1st
(12, 7, 2, '03:01:00'), -- Colton Herta, Indy 500, 2nd
(1, 8, 1, '01:25:00'), -- Max Verstappen, Canadian GP, 1st
(2, 8, 2, '01:25:30'), -- Lewis Hamilton, Canadian GP, 2nd
(9, 8, 3, '01:26:00'), -- Kevin Magnussen, Canadian GP, 3rd
(1, 9, 1, '01:20:00'), -- Max Verstappen, British GP, 1st
(2, 9, 2, '01:20:15'), -- Lewis Hamilton, British GP, 2nd
(10, 9, 3, '01:21:00'), -- Alexander Albon, British GP, 3rd
(1, 10, 1, '01:45:00'), -- Max Verstappen, Hungarian GP, 1st
(2, 10, 2, '01:45:20'), -- Lewis Hamilton, Hungarian GP, 2nd
(3, 10, 3, '01:46:00'); -- Charles Leclerc, Hungarian GP, 3rd