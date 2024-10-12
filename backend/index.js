const express = require(`express`);
const app = express();
const cors = require("cors");
app.use(cors({
    origin: ['https://imperial-mess.netlify.app', 'http://localhost:3000']
}));
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const userRoutes = require("./routes/usersRoutes.js");
const theatresRoute = require("./routes/complaintsRoutes.js");
const messRoutes = require("./routes/messRoutes.js");
const messDailyExpenseRoutes = require("./routes/messDailyExpenseRoutes.js");
const messItemRoutes = require("./routes/messItemRoutes.js");
const { scheduleDailyTask } = require('./utils/Reminder');
const foodratingRoutes = require("./routes/FoodratingRoutes.js");
scheduleDailyTask();
app.use("/api/users", userRoutes);
app.use("/api/complaints", theatresRoute);
app.use("/api/mess", messRoutes);
app.use("/api/messDailyExpense", messDailyExpenseRoutes);
app.use("/api/messItem", messItemRoutes);
app.use("/api/rating", foodratingRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Node JS server is running on port ${port}`)
);
