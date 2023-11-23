const express = require(`express`);
const app = express();
const cors=require('cors');
const userRoutes=require('./routes/usersRoutes.js')
const theatresRoute = require("./routes/complaintsRoutes.js");
const messRoutes=require("./routes/messRoutes.js");
app.use(cors())
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use('/api/users', userRoutes)
app.use("/api/complaints", theatresRoute);
app.use("/api/mess",messRoutes);
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Node JS server is running on port ${port}`));