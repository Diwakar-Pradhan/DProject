import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './configs/db.js';
import vocabularyRouter from './routes/vocabularyRoutes.js';
import tipRouter from './routes/tipRoutes.js';
import theoryRouter from './routes/theoryRoutes.js';

//creating a app
const app = express();

//connecting database
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

//
app.get('/', (req, res) => {
    res.send("API working");
})

app.use('/vocabulary', vocabularyRouter)
app.use('/tip', tipRouter)
app.use('/theory',theoryRouter)

//assigning PORT
const PORT = 3000 || process.env.PORT;

//
app.listen(PORT, () => {
    console.log("server is running in port: " + PORT);
})