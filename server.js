const express = require('express');
const connectDB = require('./config/db');
const { use } = require('./routes/api/auth');

const app = express();

//connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
