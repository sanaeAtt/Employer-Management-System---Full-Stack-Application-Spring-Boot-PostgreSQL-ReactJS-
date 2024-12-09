# 🚀 My First Full-Stack App: Spring Boot + PostgreSQL + ReactJS

Welcome to my **first-ever** full-stack web application! 🌐 Built with **Spring Boot**, **PostgreSQL**, and **ReactJS**, this app is designed to showcase the power of modern web technologies in a simple, easy-to-understand way. Whether you're a beginner like me or a seasoned developer, I hope this project helps you see how these tools come together to create dynamic, data-driven web applications.

## 🛠️ Tech Stack

- **Backend**: 
  - **Spring Boot** for building a robust RESTful API. 
  - **PostgreSQL** for database management.
  
- **Frontend**: 
  - **ReactJS** for creating a dynamic, responsive user interface.
  - **Axios** for making seamless HTTP requests to the backend.

## 🎯 Features

- **CRUD Operations**: Create, read, update, and delete data from the backend.
- **Database Management**: All data is stored and retrieved from PostgreSQL.
- **Interactive UI**: A React-based frontend for a smooth user experience.
- **Clean Architecture**: Easy-to-follow structure, ensuring good separation of concerns.

## 📁 Project Structure


## 🌍 Getting Started

Ready to start building? Here’s how to get up and running on your machine!

### 1. **Set Up the Backend (Spring Boot)**

#### Prerequisites:
- Java (preferably version 11+)
- PostgreSQL

#### Steps:
1. **Clone this repo** and navigate to the `/backend` folder:
   ```bash
   git clone https://github.com/sanaeAtt/Employer-Management-System---Full-Stack-Application-Spring-Boot-PostgreSQL-ReactJS-.git
   cd Employer-Management-System---Full-Stack-Application-Spring-Boot-PostgreSQL-ReactJS-/ems_back


2. **Configure PostgreSQL**:
    - Create a new database in PostgreSQL (e.g., ems_db).
    - Update the application.properties file in the /src/main/resources/ folder with your PostgreSQL credentials:

    ```bash
    spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    spring.jpa.hibernate.ddl-auto=update

3. **Build and run the backend using Maven:**:

    ```bash
    ./mvnw spring-boot:run

4. **The backend server should now be running at:**:
    - http://localhost:8080



### 2. **Set Up the Frontend (ReactJS)**

#### Prerequisites:
- Node.js and npm: Make sure Node.js is installed on your machine.

#### Steps:
1. **Navigate to the ems_front folder** :
    ```bash
    cd ems_front


2. **Install the required dependencies using npm** : 
    ```bash
    npm install

3. **Start the React development server** : 
    ```bash
    npm start

4. **The frontend should now be running at** : 

  http://localhost:3000


## 🧑‍💻 Usage

  Once both the backend and frontend are running:
    - Navigate to the frontend in your browser: http://localhost:3000.
    - You can add, update, and delete employer information, and it will be stored in the PostgreSQL database.


## 🔧 Troubleshooting

  *PostgreSQL* connection issues: Ensure PostgreSQL is running and the credentials in *application.properties* are correct.
  *Port conflicts*: If port 8080 is already in use, you can change the backend port in *application.properties* with:
    ```bash
    server.port=8081



