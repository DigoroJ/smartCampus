create table users(
	id serial primary key,
	name varchar(30),
	surname varchar(30),
	cell_no varchar(15),
	email varchar(30),
	created_at date default current_date,
	updated_at date default current_date,
	password varchar(200),
	role varchar(20),
	is_active boolean default true
);

create  table request(
	id serial primary key,
	client_id integer,
	runner_id integer,
	service_id integer,
	status varchar(50) default 'pending',
	comment varchar(255),
	req_date date default current_date
);

create  table address(
	id serial primary key,
	request_id integer,
	street_address varchar(50),
	suburb varchar(50),
	city varchar(50),
	postal_code varchar(4)
);

create  table review(
	id serial primary key,
	runner_id integer,
	client_id integer,
	rating integer,
	reason varchar(255)
);

create  table service(
	id serial primary key,
	name varchar(50),
	description varchar(255),
	cost numeric(5,2),
	image varchar(200)
);


--constraints

alter table request
add foreign key(client_id)
references users(id)
on delete cascade;

alter table request
add foreign key(runner_id)
references users(id)
on delete cascade;

alter table request
add foreign key(service_id)
references service(id)
on delete cascade;

alter table address
add foreign key(request_id)
references request(id)
on delete cascade;

alter table review
add foreign key(client_id)
references users(id)
on delete cascade;

alter table review
add foreign key(runner_id)
references users(id)
on delete cascade;


--Adding services
insert into service(name, description, cost, image)
values('Lawn Mowing', 'Get someone to mow the lawn for you', 99.99, 'https://i.ibb.co/myQkmvp/lawn-mowing.jpg'),
('Shopping', 'Get someone to do shopping for you', 150,'https://i.ibb.co/RjK8Jvw/shoping.jpg'),
('Certify Documents', 'Send someone to certify documents for you, give him/her your copies and originals', 75 ,'https://i.ibb.co/H7db2Ds/certify-doc.jpg'),
('Queuing' , 'Send someone to stand in a queue for you and you will find him/her there standing on your behalf', 90, 'https://i.ibb.co/rc3WrCC/queue.jpg');

--Smart campus
-- Create the database (run this only if you need to create a new database)
CREATE DATABASE student_management;

-- Use the newly created database
\c student_management;  -- This command is used in psql to connect to the database

-- Create the 'user' table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('student', 'teacher', 'admin')) NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE SET NULL
);

-- Create the 'course' table
CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Create the 'timetable' table
CREATE TABLE timetable (
    id SERIAL PRIMARY KEY,
    day VARCHAR(9) CHECK (day IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')) NOT NULL,
    time TIME NOT NULL,
    subject_id INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
);

-- Create the 'course_timetable' table
CREATE TABLE course_timetable (
    course_id INT,
    timetable_id INT,
    PRIMARY KEY (course_id, timetable_id),
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE,
    FOREIGN KEY (timetable_id) REFERENCES timetable(id) ON DELETE CASCADE
);


--querying a timetime
SELECT 
    s.student_id,
    s.name AS student_name,
    c.course_name,
    sub.subject_name,
    t.day,
    t.time_slot,
    t.location
FROM 
    Student s
JOIN 
    Course c ON s.student_id = c.course_id  -- Assuming there's an enrollment relationship
JOIN 
    Course_Timetable ct ON c.course_id = ct.course_id
JOIN 
    Timetable t ON ct.timetable_id = t.timetable_id
JOIN 
    Subject sub ON t.subject_id = sub.subject_id
WHERE 
    s.student_id = ?;  -- Replace ? with the specific student's ID

