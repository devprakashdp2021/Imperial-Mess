# Imperial-Mess
**Features of this project includes:**



1. Users can register/login themselves through thier college mail id only.

2. Users are assigned different roles [Students, Chief Warden, Accountant].

3. Blocked students are not allowed to login until they are unblocked again.

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


*P.S:* All are divided according to their hostels.


**How to run this project on your local system**
1. Clone this repository
2. Add an .env file into the backend directory
3. Install all the dependencies by runnig "npm i"
4. Start the backend server by runnig "nodemon index.js"
5. Start the frontend by running "npm satrt"

**.env file structure**
```
 mongo_url = "your_mongodb_url"
 JWTPRIVATEKEY = "your_jwt_private_key"
 SALT = "your_salt_value"
```
