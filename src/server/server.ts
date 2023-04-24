import express from 'express';
const app = express();
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// Root
app.get('/', (req, res) => {
    // If logged in, direct to homepage
    // Else direct to login
})

// Login
app.post('/login', (req, res) => {
    // Authenticate user
    // Set cookies
    // Start session
})

// Signup
app.get('/signup', (req, res) => {
    // Serve signup page
})

app.post('/signup', (req, res) => {
    // Create user
    // Set cookies
    // Start session
})

// 404: 
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Global error handler: Not sure how to do this in Typescript!
// @ts-expect-error 
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});