import express from "express";
import pg from "pg";
import Joi from "joi";

const app = express();
const port = 3000;
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'towinnadzul09122005',
    port: 5432,
})

app.use(express.json())
app.use(express.urlencoded({extended: true }))

// MIDDLEWARE LOGGING

app.use((req, res, next) => {
    const start = Date.now()

    res.on('finish', () => {
        const duration = Date.now() - start

    console.log ({
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        duration: `${Date.now() - start}ms`,
    })
})

next()
})

// RESPONSE EVENLOPE
function successResponse(res, message, data, statusCode = 200) {
    res.status(statusCode).json({
        status: 'success',
        message,
        data,
        error: null
    })

    
}