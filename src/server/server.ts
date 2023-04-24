import express from 'express';
const app = express();
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// Root
app.get('/', (req, res) => {
    // If logged in, direct to homepage - pass through session controller login check
    // Else direct to login
})

// Login
app.post('/login', (req, res) => {
    // Authenticate user - pass through usercontroller authenticate middleware
    // Set cookies - pass through cookie controller create cookie middleware
    // Start session - pass through session controller start session middleware
})

// Signup
app.get('/signup', (req, res) => {
    // Serve signup page
})

app.post('/signup', (req, res) => {
    // Create user - user controller create user
    // Set cookies - cookie control create cookie
    // Start session - session controller start session
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