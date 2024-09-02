# Imperial-Mess  | [Live Project](https://effulgent-starship-a1aec5.netlify.app/)


**Features of this project includes:**

1. Users can register/login themselves through thier college mail id only and reset their password if forgotten.

2. Users are assigned different roles [Students, Chief Warden, Accountant].

3. Blocked students are not allowed to login until they are unblocked again.

4. Users receive email notifications when their accounts are blocked or unblocked. Additionally, they are notified via email when they register a complaint, and they receive updates when the complaint is resolved.

**Students features:**

1. They can register a complaint.

2. They can view all the registered complaint of their hostel or mess.

3. They can upvote/downvote the registered complaint(s).

4. They can view their mess menu.

5. They can rate their daily mess meal.

**Chief Warden features:**

1. They can view all the registered Students.

2. They can block/unblock any Student(s).

3. They can also view all the registered complaints and can mark them as resolved.

**Accountant features:**

1. They can add daily mess items expenses.

2. They can track money spent on a particular item for a specific date range by viewing a bar graph for the same.

_P.S:_ All are divided according to their hostels.

**How to run this project on your local system**

1. Clone this repository
2. Add an .env file into the backend directory
3. Install all the dependencies by runnig "npm i"
4. Start the backend server by runnig "nodemon index.js"
5. Start the frontend by running "npm satrt"

**.env file structure**

**Note:** adminUsername and adminPassword is used for sending the mail in case of forgot password and adminPassword can be obtained by the App Password from the adminUsername gmail account.
```
 MONGO_USER = "your_mongodb_username"
 MONGO_PASS = "your_mongodb_password"
 MONGO_DATABASE = "your_mongodb_database_name"
 PORT = "your_port_number"
 JWTPRIVATEKEY = "your_jwt_private_key"
 SALT = "your_salt_value"
 adminUsername = "your_admin_username"
 adminPassword = "your_admin_password"
```

**How to run this project using docker**

1. Install the docker
2. Run the docker deamon
3. Run the command docker-compose up --build
