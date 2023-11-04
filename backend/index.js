const express = require(`express`);
const app = express();
const cors=require('cors');
const userRoutes=require('./routes/usersRoutes.js')
app.use(cors())
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use('/api/users', userRoutes)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Node JS server is running on port ${port}`));