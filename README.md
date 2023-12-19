Online Hotel Booking System Overview
====================================
It is a multi-role application project i.e. Admin and User, where Admin will have the main control over the system.
project requirement
===================

Admin will be responsible for managing the bookings and the system. On the other hand,
Users can register themselves, log in using the login credentials, view and book the Online Hotel, view booking charges, facilities, etc.
project plan
==============

The overall project is designed using the MVC pattern (MVC i.e. Model, View, and Controller). In the Backend,
it is using Spring Boot, at the data access layer the project is using Hibernate Framework, and at the front end, 
we are using vs@react, and Bootstrap. The Database used here is MYSQL.

Online Hotel Booking System Abstract
=======================================
Online bookings and reservations have seen exponential growth in the last few years. Everything from booking tickets to venues is done online.
An online hotel booking system will make sure users are able to find suitable places instead of wandering places to find a better place for accommodation one can book it online at their convenience.

So, we on Codebun have developed an Online Hotel Booking System Project in spring boot and hibernate for users to book Online Hotels online.
Here, this application supports majorly two roles i.e. Admin and User. Admin will add, and remove Online Hotels. And users can view Online Hotels and book them.

Admin is the primary user. Admin can Add/Remove/Update any details related to the system, update booking charges of the place, View/Confirm/Cancel booking orders placed by Users, and so on.

Users can register themselves and then do the booking, make payments online for advance bookings, etc.
Users can find detailed information about the Hotels & packages on the system after logging in.

The following are the major objective of this application:
===========================================================
To provide a bug-free application to the admin and user.
The main objective is to build a secured, robust Online Hotel Booking System Project where the information on booking is managed properly.
It maintains the record of Online Hotels, and the user booking detail efficiently so that it would be easy to access at any time 24*7.


 Hotel Booking System  Documentation
 ==================================
Admin Module- This module will allow Admin to log in to the system and manage the system and its functions. Admin can View/Confirm/Cancel bookings, manage hotels, payments, users, etc.

User Module– In this module, a user can register first using their name, contact number, and address and also, can manage their profile.
The user module will allow users to log in to the system using their names & contact number. Users can view their booked Online Hotel, payment status, history, etc.

Booking Module- In this module, Users can do the booking in advance.

Search Module- The user will be able to search Hotels. Users can find detailed information about the Hotels.

Payment Module- In this module, Users can make payments for the advance bookings and for the services provided.

Availability- In this module, Admin can check whether the rooms are available or not.

Details of User- Details of a User like a Name, Contact Number, Address, and booking history can be managed by Admin with this module.

Database Schema
==================
![Screenshot 2023-12-19 094908](https://github.com/Elvis16q/KivuSide-Hotel-Fronted/assets/137180945/dda6890e-5510-4d14-aed0-ab2c7d1e72d5)

Certainly! In the provided scenario, you have a "Booking" entity and a "Room" entity, and the relationship between them is established through a foreign key. Here's an explanation of the entities and their attributes:

Booking Entity:
==================
booking_id (Primary Key):

A unique identifier for each booking.
adults:

Number of adult guests included in the booking.
children:

Number of children guests included in the booking.
confirmation_code:

A code or identifier used to confirm the booking.
check_in:

The date when the guests are expected to check into the room.
check_out:

The date when the guests are expected to check out of the room.
guest_email:

Email address of the guest making the booking.
guest_fullname:

Full name of the guest making the booking.
total_guest:

Total number of guests (adults + children) included in the booking.
room_id (Foreign Key):

A foreign key that establishes a link to the "id" column in the "Room" entity. This indicates the room that is booked for the reservation.
Room Entity:
==========
id (Primary Key):

A unique identifier for each room.
is_booked:

A boolean value indicating whether the room is currently booked or available.
room_price:

The price associated with booking the room.
room_type:

A description or code indicating the type of room (e.g., single, double, suite).

In the provided database schema, the relationship between the "Booking" and "Room" entities is established through a foreign key. 
Let's delve into the relationship:

One-to-Many Relationship:

One Room, Many Bookings:

The relationship is a "One-to-Many" relationship,
meaning that one room can have multiple bookings, but each booking is associated with only one room. 
This aligns with the typical scenario where a room can be booked by different guests at different times.

Foreign Key Relationship:

Foreign Key in "Booking" Table:

The "Booking" table includes a foreign key (room_id) that references the primary key (id) of the "Room" table. 
This foreign key establishes a direct link between the "Booking" and "Room" entities.

Referential Integrity:

The foreign key ensures referential integrity, meaning that a booking cannot reference a non-existent room. 
It enforces consistency in the data, ensuring that each booking is associated with a valid room.


on security
==========
Many-to-Many Relationship:

Many Users, Many Roles:

The relationship between the "user" and "role" entities is a "Many-to-Many" relationship. This means that each user can have multiple roles, and each role can be assigned to multiple users.

Intermediate Table - Relationship Table:

user_role Table:

The table named "user_role" serves as an intermediate or junction table to handle the many-to-many relationship. The columns "user_id" and "role_id" establish the links between users and roles.

Foreign Key Relationship:

user_id and role_id as Foreign Keys:

Both "user_id" and "role_id" are foreign keys that reference the primary keys of the "user" and "role" tables, respectively.

Referential Integrity:

These foreign keys enforce referential integrity, ensuring that a user or role referenced in the "user_role" table must exist in the respective "user" or "role" table.

Role Table:

id (Primary Key):

The primary key of the "role" table is referenced by the "role_id" column in the "user_role" table.

name:

The "name" column contains the role names (e.g., "ROLE_ADMIN," "ROLE_USER," "ROLE_EDITOR").

User Table:

id (Primary Key):

The primary key of the "user" table is referenced by the "user_id" column in the "user_role" table.

email, first_name, last_name, password:

The "user" table contains information about each user, such as email, first name, last name, and password.

The many-to-many relationship allows users to have multiple roles and roles to be associated with multiple users,
providing flexibility in defining access and permissions in an application. The "user_role" table serves as the bridge between users and roles in this schema.

Technical Documentation:
=========================
Front-End: Vite@react,Bootstrap,.
Server-side: Spring Boot.
Back-end: MYSQL, Hibernate.
Server: Tomcat 8.5.



















