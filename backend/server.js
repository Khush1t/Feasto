import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

// app configuration
const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})