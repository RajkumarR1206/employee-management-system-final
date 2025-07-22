

# Employee Management System

This is a full-stack Employee Management System built using:

- **Backend**: Java, Spring Boot
- **Frontend**: React JS
- **Database**: MySQL

---

Project Structure

```
employee-management-system-final/
├── em/     # Spring Boot backend
└── react-gui/    # React frontend
```



---

## Backend Setup (Spring Boot)

 **Location:** `/em`

###  Prerequisites
- Java 17+
- Maven
- MySQL installed and running

###  Setup Instructions
1. Open `/backend` in IntelliJ IDEA or Eclipse.
2. Create a MySQL database named: `ems_db`.
3. Update the database credentials in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password

4. Run the project using `EmployeeManagementApplication.java`.

The backend will run at: `http://localhost:8080`

---

##  Frontend Setup (React JS)

 **Location:** `/react-gui`

###  Prerequisites

* Node.js (v14 or above)
* npm

###  Setup Instructions

```bash
cd frontend
npm install
npm start
```

The frontend will run at: `http://localhost:3000`

Make sure the backend is running at `http://localhost:8080` for full API connectivity.

---

##  Features

* Add, update, delete, and view employees
* RESTful APIs with Spring Boot
* React UI with Axios integration
* Data persisted in MySQL

---

##  Future Improvements

* Authentication (Login/Register)
* Role-based access control (Admin/User)
* Deployment to:

  * Frontend: Vercel
  * Backend: Render or Railway

---

##  Author

**Rajkumar R**
[GitHub Profile](https://github.com/RajkumarR1206)


