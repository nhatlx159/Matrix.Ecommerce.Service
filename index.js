const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const dbConnect = require("./dbConnection")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//ROUTE GET

//ROUTE POST



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    dbConnect()
    console.log(`Server is running on PORT: ${PORT}`);
})

